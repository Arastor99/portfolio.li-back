import { Module } from '@nestjs/common';
import { PortfolioTemplateDbService } from './portfolio-template.db.service';

@Module({
  providers: [PortfolioTemplateDbService],
  exports: [PortfolioTemplateDbService],
})
export class PortfolioTemplateDbModule {}
