import { Injectable } from '@nestjs/common';
import { ActivityDbService } from 'src/models/activity/activity.db.service';
import { GetActivityDto } from './dto/activity.dto';

@Injectable()
export class ActivityService {
  constructor(private readonly activityDbService: ActivityDbService) {}

  async getActivities(userId: string, dto: GetActivityDto) {
    const { offset, limit = 10 } = dto;

    return await this.activityDbService.findMany({
      where: { userId },
      skip: offset,
      take: limit,
    });
  }
}
