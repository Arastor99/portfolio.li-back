import { Module } from '@nestjs/common';

import { ProfileDbService } from './profile.db.service';

@Module({
  providers: [ProfileDbService],
  exports: [ProfileDbService],
})
export class ProfileDbModule {}
