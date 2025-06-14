import { Module } from '@nestjs/common';

import { CVDbModule } from 'src/models/cv/cv.db.module';
import { ActivityDbModule } from 'src/models/activity/activity.db.module';

import { CvController } from './cv.controller';
import { CvService } from './cv.service';

@Module({
  imports: [CVDbModule, ActivityDbModule],
  controllers: [CvController],
  providers: [CvService],
})
export class CvModule {}
