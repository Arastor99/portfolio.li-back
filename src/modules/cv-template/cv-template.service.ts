import { BadRequestException, Injectable } from '@nestjs/common';
import { CVTemplateDbService } from 'src/models/cv-template/cv-template.db.service';

@Injectable()
export class CvTemplateService {
  constructor(private readonly cVTemplateService: CVTemplateDbService) {}

  async getCVTemplates() {
    return await this.cVTemplateService.findMany({});
  }

  async getCVTemplate(idOrName: string) {
    let cvTemplate = await this.cVTemplateService.findOne({
      where: {
        id: idOrName,
      },
    });

    if (!cvTemplate) {
      cvTemplate = await this.cVTemplateService.findOne({
        where: {
          name: idOrName,
        },
      });
    }

    if (!cvTemplate)
      throw new BadRequestException(
        `CVTemplate with id or name "${idOrName}" not found`,
      );

    return cvTemplate;
  }
}
