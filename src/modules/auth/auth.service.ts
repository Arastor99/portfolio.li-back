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
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userDbService: UserDbService,
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

    // Generate JWT token
    const token = await this.generateToken(newUser.id);
    if (!token) throw new InternalServerErrorException('Something went wrong');

    this.logger.debug(
      `User ${newUser.email} registered successfully. Token: ${token}`,
    );

    return token;
  }

  async signIn(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // Find user by email
    const user = await this.userDbService.findOne({
      where: { email },
    });
    if (!user) throw new BadRequestException('Invalid credentials');

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
