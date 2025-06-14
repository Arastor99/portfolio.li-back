import { Module } from '@nestjs/common';
import { ActivityDbService } from './activity.db.service';

@Module({
  providers: [ActivityDbService],
  exports: [ActivityDbService],
})
export class ActivityDbModule {}
