import { BadRequestException, Injectable } from '@nestjs/common';

import { PortfolioTemplateDbService } from 'src/models/portfolio-template/portfolio-template.db.service';

@Injectable()
export class PortfolioTemplateService {
  constructor(
    private readonly portfolioTemplateDbService: PortfolioTemplateDbService,
  ) {}

  async getPortfolioTemplates() {
    return await this.portfolioTemplateDbService.findMany({});
  }

  async getPortfolioTemplate(idOrName: string) {
    let portfolioTemplate = await this.portfolioTemplateDbService.findOne({
      where: {
        id: idOrName,
      },
    });
    if (!portfolioTemplate) {
      portfolioTemplate = await this.portfolioTemplateDbService.findOne({
        where: {
          name: idOrName,
        },
      });
    }
    if (!portfolioTemplate)
      throw new BadRequestException(
        `PortfolioTemplate with id or name "${idOrName}" not found`,
      );

    return portfolioTemplate;
  }
}
