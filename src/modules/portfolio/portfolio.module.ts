import { Module } from '@nestjs/common';

import { PortfolioDbModule } from 'src/models/portfolio/portfolio.db.module';

import { PortfolioController } from './portfolio.controller';
import { PortfolioService } from './portfolio.service';
import { ProfileDbModule } from 'src/models/profile/profile.db.module';

@Module({
  imports: [PortfolioDbModule, ProfileDbModule],
  controllers: [PortfolioController],
  providers: [PortfolioService],
})
export class PortfolioModule {}
