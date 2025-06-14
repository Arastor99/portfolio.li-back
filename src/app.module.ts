import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { envValidationSchema } from './config/env.validation';

import { PrismaModule } from './models/prisma.module';

import { AuthModule } from './modules/auth/auth.module';
import { ProfileModule } from './modules/profile/profile.module';
import { PortfolioTemplateModule } from './modules/portfolio-template/portfolio-template.module';
import { ProxyModule } from './modules/proxy/proxy.module';
import { PortfolioModule } from './modules/portfolio/portfolio.module';
import { CvModule } from './modules/cv/cv.module';
import { CvTemplateModule } from './modules/cv-template/cv-template.module';
import { ActivityModule } from './modules/activity/activity.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Para no tener que importarlo en cada módulo
      validationSchema: envValidationSchema,
    }),
    PrismaModule,
    AuthModule,
    ProfileModule,
    PortfolioModule,
    PortfolioTemplateModule,
    ProxyModule,
    CvModule,
    CvTemplateModule,
    ActivityModule,
  ],
})
export class AppModule {}
