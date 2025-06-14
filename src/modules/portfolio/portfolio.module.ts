import { Module } from '@nestjs/common';

import { PortfolioDbModule } from 'src/models/portfolio/portfolio.db.module';
import { ProfileDbModule } from 'src/models/profile/profile.db.module';
import { ActivityDbModule } from 'src/models/activity/activity.db.module';

import { PortfolioController } from './portfolio.controller';

import { PortfolioService } from './portfolio.service';

@Module({
  imports: [PortfolioDbModule, ProfileDbModule, ActivityDbModule],
  controllers: [PortfolioController],
  providers: [PortfolioService],
})
export class PortfolioModule {}
