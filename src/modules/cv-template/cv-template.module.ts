import { Module } from '@nestjs/common';

import { CVTemplateDbModule } from 'src/models/cv-template/cv-template.db.module';

import { CvTemplateController } from './cv-template.controller';

import { CvTemplateService } from './cv-template.service';

@Module({
  imports: [CVTemplateDbModule],
  controllers: [CvTemplateController],
  providers: [CvTemplateService],
})
export class CvTemplateModule {}
