import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { ActivityDbModule } from 'src/models/activity/activity.db.module';

@Module({
  imports: [ActivityDbModule],
  controllers: [ActivityController],
  providers: [ActivityService],
})
export class ActivityModule {}
