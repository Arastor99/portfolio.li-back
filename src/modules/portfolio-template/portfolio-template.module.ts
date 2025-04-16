import { Module } from '@nestjs/common';
import { PortfolioTemplateService } from './portfolio-template.service';
import { PortfolioTemplateController } from './portfolio-template.controller';
import { PortfolioTemplateDbModule } from 'src/models/portfolio-template/portfolio-template.db.module';

@Module({
  imports: [PortfolioTemplateDbModule],
  controllers: [PortfolioTemplateController],
  providers: [PortfolioTemplateService],
})
export class PortfolioTemplateModule {}
