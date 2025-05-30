import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { OAuth2Client, TokenPayload } from 'google-auth-library';

import { GoogleAuthDto, LoginDto, RegisterDto } from './dto/auth.dto';

import { UserDbService } from 'src/models/user/user.db.service';
import { MailService } from 'src/common/mail/mail.service';
import { CLIENT_URL, GOOGLE_CLIENT_ID } from 'src/common/constants';
import { TokenMailVericationService } from './tokenMailVerification.service';

@Injectable()
export class AuthService {
  private googleClient: OAuth2Client;
  private readonly logger = new Logger(AuthService.name);
  private readonly saltRounds = 10;

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly userDbService: UserDbService,
    private readonly mailService: MailService,
    private readonly tokenMailVerificationService: TokenMailVericationService,
  ) {
    this.googleClient = new OAuth2Client(
      this.configService.get<string>(GOOGLE_CLIENT_ID),
    );
  }

  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.saltRounds);
    return bcrypt.hash(password, salt);
  }

  private async comparePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  private async generateToken(userId: string): Promise<string> {
    const payload = { sub: userId };
    return await this.jwtService.signAsync(payload);
  }

  async register(registerDto: RegisterDto) {
    const { email, password, fullName } = registerDto;

    // Check if user already exists
    const existingUser = await this.userDbService.findOne({
      where: { email },
    });
    if (existingUser) throw new BadRequestException('User already exists');

    // Hash password
    const hashedPassword = await this.hashPassword(password);
    if (!hashedPassword)
      throw new InternalServerErrorException('Something went wrong');

    // Create new user
    const newUser = await this.userDbService.create({
      email,
      password: hashedPassword,
      fullName,
    });

    if (!newUser)
      throw new InternalServerErrorException('Something went wrong');

    const tokenMail =
      this.tokenMailVerificationService.generateVerificationToken(newUser.id);

    if (!tokenMail)
      throw new InternalServerErrorException('Something went wrong');

    const APP_URL = this.configService.get<string>(CLIENT_URL);

    // Send verification email
    const verificationUrl = `${APP_URL}/verify/${tokenMail}`; // TODO: move to env an use correct URLS
    const supportLink = `${APP_URL}/support`; // TODO: move to env an use correct URLS

    const mailDto = {
      to: email,
      subject: 'Email Verification',
      name: fullName,
      url: verificationUrl,
      supportLink,
    };
    await this.mailService.sendVerificationEmail(mailDto).catch((err) => {
      this.logger.error('Failed to send verification email', err);
      // throw new InternalServerErrorException(
      //   'Failed to send verification email',
      // );
    });
    this.logger.debug(
      `Verification email sent to ${email}. Verification URL: ${verificationUrl}`,
    );

    const token = await this.generateToken(newUser.id);
    if (!token) throw new InternalServerErrorException('Something went wrong');
    this.logger.debug(`User ${email} registered successfully. Token: ${token}`);

    return {
      message:
        'User registered successfully. Please check your email for verification.',
      token,
    };
  }

  async verifyEmail(token: string) {
    // Verify token
    const decodedToken =
      this.tokenMailVerificationService.verifyVerificationToken(token);
    if (!decodedToken) throw new BadRequestException('Invalid token');

    // Find user by ID
    const user = await this.userDbService.findOne({
      where: { id: decodedToken.sub },
    });
    if (!user) throw new BadRequestException('User not found');

    // Check if user is already verified
    if (user.emailVerified)
      throw new BadRequestException('User is already verified');

    // Update user to verified
    await this.userDbService.update({
      where: { id: user.id },
      data: { emailVerified: true },
    });

    this.logger.debug(`User ${user.email} verified successfully`);

    const tokenLogin = await this.generateToken(user.id);
    if (!tokenLogin)
      throw new InternalServerErrorException('Something went wrong');
    this.logger.debug(
      `User ${user.email} signed in successfully. Token: ${tokenLogin}`,
    );

    return {
      message: 'Email verified successfully, you are now logged in',
      token: tokenLogin,
    };
  }

  async signIn(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // Find user by email
    const user = await this.userDbService.findOne({
      where: { email },
    });
    if (!user) throw new BadRequestException('Invalid credentials');

    // Check if user is verified proceed to send verification email
    if (!user.emailVerified) {
      const tokenMail =
        this.tokenMailVerificationService.generateVerificationToken(user.id);
      if (!tokenMail)
        throw new InternalServerErrorException('Something went wrong');

      const mailDto = {
        to: user.email,
        subject: 'Email Verification',
        name: user.fullName,
        url: `${process.env.APP_URL}/verify/${tokenMail}`,
        supportLink: `${process.env.APP_URL}/support`,
      };

      await this.mailService.sendVerificationEmail(mailDto).catch((err) => {
        this.logger.error('Failed to send verification email', err);
        // throw new InternalServerErrorException(
        //   'Failed to send verification email',
        // );
      });
    }

    // Compare password
    const isPasswordValid = await this.comparePassword(password, user.password);
    if (!isPasswordValid) throw new BadRequestException('Invalid credentials');

    // Generate JWT token
    const token = await this.generateToken(user.id);
    if (!token) throw new InternalServerErrorException('Something went wrong');

    this.logger.debug(
      `User ${user.email} signed in successfully. Token: ${token}`,
    );

    return {
      message: 'User signed in successfully',
      token,
    };
  }

  async googleAuth(googleAuthDto: GoogleAuthDto) {
    let payload: TokenPayload;
    try {
      this.logger.debug(
        'Verifying Google ID token with credentials:',
        googleAuthDto,
      );
      const ticket = await this.googleClient.verifyIdToken({
        idToken: googleAuthDto.credential,
      });
      payload = ticket.getPayload();
    } catch (err) {
      this.logger.debug('Google ID token verification failed', err);
      throw new UnauthorizedException('Invalid Google ID token');
    }

    const { email, name } = payload;

    this.logger.debug(
      `Google ID token verified successfully. Creating or updating user with email: ${email}`,
    );

    const user = await this.userDbService.createOrUpdate({
      where: { email },
      create: {
        email,
        fullName: name,
        emailVerified: true,
        password: '',
      },
      update: {
        emailVerified: true,
      },
    });

    if (!user) throw new InternalServerErrorException('Something went wrong');

    // Generate JWT token
    const token = await this.generateToken(user.id);
    if (!token) throw new InternalServerErrorException('Something went wrong');

    this.logger.debug(`User ${email} signed in successfully. Token: ${token}`);

    return {
      message: 'User signed in successfully',
      token,
    };
  }
}
