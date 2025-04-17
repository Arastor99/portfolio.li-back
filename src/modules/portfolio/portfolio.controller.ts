import { Body, Controller, Get, Post, Put, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';

import { CreatePortfolioDto, UpdatePortfolioDto } from './dto/portfolio.dto';

import { PortfolioService } from './portfolio.service';

@Controller('portfolio')
@UseGuards(JwtAuthGuard)
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Post()
  async create(
    @CurrentUser('userId') userId: string,
    @Body() createPortfolioDto: CreatePortfolioDto,
  ) {
    return await this.portfolioService.create(userId, createPortfolioDto);
  }

  @Put()
  async update(
    @CurrentUser('userId') userId: string,
    @Body() updatePortfolioDto: UpdatePortfolioDto,
  ) {
    return await this.portfolioService.update(userId, updatePortfolioDto);
  }

  @Get()
  async get(@CurrentUser('userId') userId: string) {
    return await this.portfolioService.get(userId);
  }
}
