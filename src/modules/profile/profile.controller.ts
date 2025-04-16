import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(':publicId')
  async getProfile(@Param('publicId') publicId: string) {
    if (!publicId) throw new BadRequestException('Public ID is required');

    return await this.profileService.importLinkedInProfile('', publicId);
  }
}
