import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './models/prisma.module';
import { envValidationSchema } from './config/env.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Para no tener que importarlo en cada módulo
      validationSchema: envValidationSchema,
    }),
    AuthModule,
    PrismaModule,
  ],
})
export class AppModule {}
