import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { LoginDto, RegisterDto } from './dto/auth.dto';

import { UserDbService } from 'src/models/user/user.db.service';
import { MailService } from 'src/common/mail/mail.service';
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userDbService: UserDbService,
    private readonly mailService: MailService,
  ) {}

  private readonly logger = new Logger(AuthService.name);
  private readonly saltRounds = 10;

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
    const payload = { userId };
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

    const token = await this.generateToken(newUser.id);
    if (!token) throw new InternalServerErrorException('Something went wrong');

    // Send verification email
    const verificationUrl = `${process.env.APP_URL}/verify/${token}`;
    const supportLink = `${process.env.APP_URL}/support`;
    const mailDto = {
      to: email,
      subject: 'Email Verification',
      name: fullName,
      url: verificationUrl,
      supportLink,
    };
    await this.mailService.sendVerificationEmail(mailDto).catch((err) => {
      this.logger.error('Failed to send verification email', err);
      throw new InternalServerErrorException(
        'Failed to send verification email',
      );
    });
    this.logger.debug(
      `Verification email sent to ${email}. Verification URL: ${verificationUrl}`,
    );

    return {
      message:
        'User registered successfully. Please check your email for verification.',
    };
  }

  async signIn(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // Find user by email
    const user = await this.userDbService.findOne({
      where: { email },
    });
    if (!user) throw new BadRequestException('Invalid credentials');

    // Check if user is verified
    if (!user.emailVerified)
      throw new BadRequestException('User is not verified');

    // Compare password
    const isPasswordValid = await this.comparePassword(password, user.password);
    if (!isPasswordValid) throw new BadRequestException('Invalid credentials');

    // Generate JWT token
    const token = await this.generateToken(user.id);
    if (!token) throw new InternalServerErrorException('Something went wrong');

    this.logger.debug(
      `User ${user.email} signed in successfully. Token: ${token}`,
    );

    return token;
  }
}
