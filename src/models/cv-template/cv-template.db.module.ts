import { Module } from '@nestjs/common';
import { CVTemplateDbService } from './cv-template.db.service';

@Module({
  providers: [CVTemplateDbService],
  exports: [CVTemplateDbService],
})
export class CVTemplateDbModule {}
