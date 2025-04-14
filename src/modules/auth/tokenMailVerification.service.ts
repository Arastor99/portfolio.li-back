import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import {
  JWT_MAIL_VERIFICATION_EXPIRES_IN,
  JWT_MAIL_VERIFICATION_SECRET,
} from 'src/common/constants';

@Injectable()
export class TokenMailVericationService {
  constructor(
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  generateVerificationToken(userId: string) {
    return this.jwtService.sign(
      { sub: userId },
      {
        secret: this.config.get<string>(JWT_MAIL_VERIFICATION_SECRET),
        expiresIn: this.config.get<string>(JWT_MAIL_VERIFICATION_EXPIRES_IN),
      },
    );
  }

  verifyVerificationToken(token: string) {
    return this.jwtService.verify(token, {
      secret: this.config.get<string>(JWT_MAIL_VERIFICATION_SECRET),
    });
  }
}
