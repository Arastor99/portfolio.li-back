import { BadRequestException, Injectable } from '@nestjs/common';

import { CreatePortfolioDto, UpdatePortfolioDto } from './dto/portfolio.dto';

import { generateRandomString } from 'src/common/utils/common';

import { PortfolioDbService } from 'src/models/portfolio/portfolio.db.service';
import { ProfileDbService } from 'src/models/profile/profile.db.service';
import { ActivityDbService } from 'src/models/activity/activity.db.service';

@Injectable()
export class PortfolioService {
  constructor(
    private readonly portfolioDbService: PortfolioDbService,
    private readonly profileDbService: ProfileDbService,
    private readonly activityDbService: ActivityDbService,
  ) {}

  async create(userId: string, createPortfolioDto: CreatePortfolioDto) {
    const { templateName } = createPortfolioDto;
    const publicId = await this.profileDbService
      .findOne({
        where: {
          userId,
        },
        select: {
          publicId: true,
        },
      })
      .then((profile) => profile?.publicId);
    const url = `${publicId}-${generateRandomString(8)}`;
    const existingPortfolio = await this.portfolioDbService.findOne({
      where: {
        url,
      },
    });

    if (existingPortfolio)
      throw new BadRequestException(
        'Portfolio with this URL already exists. Please choose a different URL.',
      );

    await this.activityDbService.create({
      type: 'CREATE_PORTFOLIO',

      user: {
        connect: {
          id: userId,
        },
      },
    });

    return await this.portfolioDbService.create({
      user: {
        connect: {
          id: userId,
        },
      },
      template: {
        connect: {
          name: templateName,
        },
      },
      url,
    });
  }

  async update(userId: string, updatePortfolioDto: UpdatePortfolioDto) {
    const { templateName, url, active } = updatePortfolioDto;

    const existingPortfolio = await this.portfolioDbService.findOne({
      where: {
        userId,
      },
    });

    if (!existingPortfolio)
      throw new BadRequestException(
        'Portfolio with this URL does not exist. Please choose a different URL.',
      );

    await this.activityDbService.create({
      type: 'UPDATE_PORTFOLIO',

      user: {
        connect: {
          id: userId,
        },
      },
    });

    return await this.portfolioDbService.update({
      where: {
        userId,
      },
      data: {
        ...(templateName && {
          template: {
            connect: {
              name: templateName,
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
      select: {
        id: true,
        url: true,
        active: true,
        template: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!portfolio)
      throw new BadRequestException(
        'Portfolio with this URL does not exist. Please choose a different URL.',
      );

    return portfolio;
  }

  async getByUrl(url: string) {
    const portfolio = await this.portfolioDbService.findOne({
      where: {
        url,
      },
      select: {
        url: true,
        template: {
          select: {
            name: true,
          },
        },
        user: {
          select: {
            profile: {
              include: {
                certifications: true,
                skills: true,
                experiences: true,
                education: true,
                projects: true,
                languages: true,
                honors: true,
                publications: true,
                volunteer: true,
              },
            },
          },
        },
      },
    });

    if (!portfolio)
      throw new BadRequestException(
        `Portfolio with URL "${url}" does not exist.`,
      );

    return portfolio;
  }
}
