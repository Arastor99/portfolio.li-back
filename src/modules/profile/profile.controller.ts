import {
  BadRequestException,
  Controller,
  Get,
  Param,
  UseGuards,
} from '@nestjs/common';

import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(':publicId')
  async getProfile(
    @Param('publicId') publicId: string,
    @CurrentUser('userId') userId?: string,
  ) {
    if (!publicId) throw new BadRequestException('Public ID is required');

    return await this.profileService.importLinkedInProfile({
      userId,
      publicId,
    });
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getProfileByUserId(@CurrentUser('userId') userId: string) {
    if (!userId) throw new BadRequestException('User ID is required');

    return await this.profileService.getProfileByUserId(userId);
  }
}
