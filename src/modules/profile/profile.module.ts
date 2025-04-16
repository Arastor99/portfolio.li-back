import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import ProfileExtractionApiService from 'src/common/apis/profile-extraction-api.service';
import { ProfileDbModule } from 'src/models/profile/profile.db.module';

@Module({
  imports: [ProfileDbModule],
  controllers: [ProfileController],
  providers: [ProfileService, ProfileExtractionApiService],
})
export class ProfileModule {}
