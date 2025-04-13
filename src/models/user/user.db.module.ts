import { Module } from '@nestjs/common';
import { UserDbService } from './user.db.service';

@Module({
  providers: [UserDbService],
  exports: [UserDbService],
})
export class UserDbModule {}
