import { BadRequestException, Controller, Get, Param } from '@nestjs/common';

import { CvTemplateService } from './cv-template.service';

@Controller('cv-template')
export class CvTemplateController {
  constructor(private readonly cvTemplateService: CvTemplateService) {}

  @Get(':idOrName')
  async getCVTemplate(@Param('idOrName') idOrName: string) {
    if (!idOrName) throw new BadRequestException('ID is required');

    return await this.cvTemplateService.getCVTemplate(idOrName);
  }

  @Get()
  async getCVTemplates() {
    return await this.cvTemplateService.getCVTemplates();
  }
}
