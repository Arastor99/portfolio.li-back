import { Module } from '@nestjs/common';

import { ProfileDbModule } from 'src/models/profile/profile.db.module';
import { ActivityDbModule } from 'src/models/activity/activity.db.module';

import { ProfileService } from './profile.service';

import ProfileExtractionApiService from 'src/common/apis/profile-extraction-api.service';

import { ProfileController } from './profile.controller';

@Module({
  imports: [ProfileDbModule, ActivityDbModule],
  controllers: [ProfileController],
  providers: [ProfileService, ProfileExtractionApiService],
})
export class ProfileModule {}
