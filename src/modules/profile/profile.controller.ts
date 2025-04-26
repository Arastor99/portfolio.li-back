import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';

import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

import { ProfileService } from './profile.service';
import { Profile } from 'src/common/types/common';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(':publicId')
  async getProfile(@Param('publicId') publicId: string) {
    if (!publicId) throw new BadRequestException('Public ID is required');

    return await this.profileService.importLinkedInProfile({
      publicId,
    });
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getProfileByUserId(@CurrentUser('userId') userId: string) {
    if (!userId) throw new BadRequestException('User ID is required');

    return await this.profileService.getProfileByUserId(userId);
  }

  @Put()
  @UseGuards(JwtAuthGuard)
  async updateProfileByUserId(
    @CurrentUser('userId') userId: string,
    @Body() profile: Partial<Profile>,
  ) {
    if (!userId) throw new BadRequestException('User ID is required');

    return await this.profileService.updateProfileByUserId(userId, profile);
  }

  @Put(':publicId/attach')
  @UseGuards(JwtAuthGuard)
  async attachProfileToUser(
    @CurrentUser('userId') userId: string,
    @Param('publicId') publicId: string,
  ) {
    if (!userId) throw new BadRequestException('User ID is required');
    if (!publicId) throw new BadRequestException('Public ID is required');

    return await this.profileService.attachProfileToUser(userId, publicId);
  }
}
