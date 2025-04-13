import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { JWT_EXPIRES_IN, JWT_SECRET } from 'src/common/constants';

import { UserDbModule } from 'src/models/user/user.db.module';

import { AuthController } from './auth.controller';

import { AuthService } from './auth.service';

@Module({
  imports: [
    ConfigModule, // si no es global
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>(JWT_SECRET),
        signOptions: {
          expiresIn: configService.get<string>(JWT_EXPIRES_IN),
        },
      }),
    }),
    UserDbModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
