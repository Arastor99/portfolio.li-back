import { BadRequestException, Injectable } from '@nestjs/common';
import { CVDbService } from 'src/models/cv/cv.db.service';
import { CreateCVDto } from './dto/cv.dto';
import { CVTemplateDbService } from 'src/models/cv-template/cv-template.db.service';

@Injectable()
export class CvService {
  constructor(
    private readonly cVService: CVDbService,
    private readonly cVTemplateService: CVTemplateDbService,
  ) {}

  async create(userId: string, createCVDto: CreateCVDto) {
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
