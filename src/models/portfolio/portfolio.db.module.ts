import { Module } from '@nestjs/common';
import { PortfolioDbService } from './portfolio.db.service';

@Module({
  providers: [PortfolioDbService],
  exports: [PortfolioDbService],
})
export class PortfolioDbModule {}
