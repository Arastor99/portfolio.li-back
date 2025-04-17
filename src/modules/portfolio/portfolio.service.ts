import { BadRequestException, Injectable } from '@nestjs/common';

import { CreatePortfolioDto, UpdatePortfolioDto } from './dto/portfolio.dto';

import { PortfolioDbService } from 'src/models/portfolio/portfolio.db.service';

@Injectable()
export class PortfolioService {
  constructor(private readonly portfolioDbService: PortfolioDbService) {}

  async create(userId: string, createPortfolioDto: CreatePortfolioDto) {
    const { templateId, url } = createPortfolioDto;

    const existingPortfolio = await this.portfolioDbService.findOne({
      where: {
        url,
      },
    });

    if (existingPortfolio)
      throw new BadRequestException(
        'Portfolio with this URL already exists. Please choose a different URL.',
      );

    return await this.portfolioDbService.create({
      user: {
        connect: {
          id: userId,
        },
      },
      template: {
        connect: {
          id: templateId,
        },
      },
      url,
    });
  }

  async update(userId: string, updatePortfolioDto: UpdatePortfolioDto) {
    const { templateId, url, active } = updatePortfolioDto;

    const existingPortfolio = await this.portfolioDbService.findOne({
      where: {
        userId,
      },
    });

    if (!existingPortfolio)
      throw new BadRequestException(
        'Portfolio with this URL does not exist. Please choose a different URL.',
      );

    return await this.portfolioDbService.update({
      where: {
        userId,
      },
      data: {
        ...(templateId && {
          template: {
            connect: {
              id: templateId,
            },
          },
        }),
        ...(url && {
          url,
        }),
        ...(active !== undefined && {
          active,
        }),
      },
    });
  }

  async get(userId: string) {
    const portfolio = await this.portfolioDbService.findOne({
      where: {
        userId,
      },
    });

    if (!portfolio)
      throw new BadRequestException(
        'Portfolio with this URL does not exist. Please choose a different URL.',
      );

    return portfolio;
  }
}
