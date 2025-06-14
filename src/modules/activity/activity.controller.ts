import { Controller, Get, Query, UseGuards } from '@nestjs/common';

import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { ActivityService } from './activity.service';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getActivities(
    @CurrentUser('userId') userId: string,
    @Query('offset') offset: number,
    @Query('limit') limit: number,
  ) {
    return await this.activityService.getActivities(userId, {
      offset,
      limit,
    });
  }
}
