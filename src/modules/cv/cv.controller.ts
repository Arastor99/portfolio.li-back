import { Body, Controller, Get, Post, Put } from '@nestjs/common';

import { CreateCVDto } from './dto/cv.dto';

import { CurrentUser } from 'src/common/decorators/current-user.decorator';

import { CvService } from './cv.service';

@Controller('cv')
export class CvController {
  constructor(private readonly cvService: CvService) {}

  @Post()
  async create(
    @CurrentUser('userId') userId: string,
    @Body() createCvDto: CreateCVDto,
  ) {
    return await this.cvService.create(userId, createCvDto);
  }

  @Put()
  async update(
    @CurrentUser('userId') userId: string,
    @Body() createCvDto: CreateCVDto,
  ) {
    return await this.cvService.update(userId, createCvDto);
  }

  @Get()
  async get(@CurrentUser('userId') userId: string) {
    return await this.cvService.get(userId);
  }
}
