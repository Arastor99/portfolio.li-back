import { BadRequestException, Controller, Get, Param } from '@nestjs/common';

import { PortfolioTemplateService } from './portfolio-template.service';

@Controller('portfolio-template')
export class PortfolioTemplateController {
  constructor(
    private readonly portfolioTemplateService: PortfolioTemplateService,
  ) {}

  @Get(':idOrName')
  async getPortfolioTemplate(@Param('idOrName') idOrName: string) {
    if (!idOrName) throw new BadRequestException('ID is required');

    return await this.portfolioTemplateService.getPortfolioTemplate(idOrName);
  }

  @Get()
  async getPortfolioTemplates() {
    return await this.portfolioTemplateService.getPortfolioTemplates();
  }
}
