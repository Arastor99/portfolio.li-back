import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';

import { ProfileService } from './profile.service';

@Controller('profile')
// @UseGuards(JwtAuthGuard)
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
}
