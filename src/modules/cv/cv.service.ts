import { BadRequestException, Injectable } from '@nestjs/common';

import { CreateCVDto } from './dto/cv.dto';

import { CVDbService } from 'src/models/cv/cv.db.service';
import { ActivityDbService } from 'src/models/activity/activity.db.service';

@Injectable()
export class CvService {
  constructor(
    private readonly cVService: CVDbService,
    private readonly activityDbService: ActivityDbService,
  ) {}

  async create(userId: string, createCVDto: CreateCVDto) {
    await this.activityDbService.create({
      type: 'CREATE_CV',

      user: {
        connect: {
          id: userId,
        },
      },
    });

    return await this.cVService.create({
      user: {
        connect: {
          id: userId,
        },
      },
      template: {
        connect: {
          name: createCVDto.templateName,
        },
      },
    });
  }

  async update(userId: string, createCVDto: CreateCVDto) {
    const { templateName } = createCVDto;
    const existingCV = await this.cVService.findOne({
      where: {
        userId,
      },
    });
    if (!existingCV) throw new BadRequestException('CV not found');

    await this.activityDbService.create({
      type: 'UPDATE_CV',

      user: {
        connect: {
          id: userId,
        },
      },
    });

    return await this.cVService.update({
      where: {
        userId,
      },
      data: {
        template: {
          connect: {
            name: templateName,
          },
        },
      },
    });
  }

  async get(userId: string) {
    const cv = await this.cVService.findOne({
      where: {
        userId,
      },
      select: {
        id: true,
        template: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!cv) throw new BadRequestException('CV not found');

    return cv;
  }
}
