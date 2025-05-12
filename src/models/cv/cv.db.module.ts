import { Module } from '@nestjs/common';
import { CVDbService } from './cv.db.service';

@Module({
  providers: [CVDbService],
  exports: [CVDbService],
})
export class CVDbModule {}
