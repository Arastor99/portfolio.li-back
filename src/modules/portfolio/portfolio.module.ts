import { Module } from '@nestjs/common';

import { PortfolioDbModule } from 'src/models/portfolio/portfolio.db.module';

import { PortfolioController } from './portfolio.controller';
import { PortfolioService } from './portfolio.service';

@Module({
  imports: [PortfolioDbModule],
  controllers: [PortfolioController],
  providers: [PortfolioService],
})
export class PortfolioModule {}
