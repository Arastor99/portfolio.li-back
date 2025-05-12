import { Module } from '@nestjs/common';
import { CvTemplateService } from './cv-template.service';
import { CvTemplateController } from './cv-template.controller';

@Module({
  controllers: [CvTemplateController],
  providers: [CvTemplateService],
})
export class CvTemplateModule {}
