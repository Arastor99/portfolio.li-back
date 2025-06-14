import { Body, Controller, Get, UseGuards } from '@nestjs/common';

import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { ActivityService } from './activity.service';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

import { GetActivityDto } from './dto/activity.dto';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getActivities(
    @CurrentUser() userId: string,
    @Body() dto: GetActivityDto,
  ) {
    return await this.activityService.getActivities(userId, dto);
  }
}
