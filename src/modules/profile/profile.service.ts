import { Injectable } from '@nestjs/common';
import ProfileExtractionApiService from 'src/common/apis/profile-extraction-api.service';
import { ProfileDbService } from 'src/models/profile/profile.db.service';

@Injectable()
export class ProfileService {
  constructor(
    private readonly profileDbService: ProfileDbService,
    private readonly profileExtractionApiService: ProfileExtractionApiService,
  ) {}

  async importLinkedInProfile(userId: string, publicId: string) {
    // Use the ProfileExtractionApiService to extract the profile data
    const profileData =
      await this.profileExtractionApiService.getProfile(publicId);

    // Save the extracted profile data to the database using ProfileDbService
    const createdProfile = await this.profileDbService.create({
      ...profileData,
      publicId: publicId,
      user: {
        connect: {
          id: userId,
        },
      },
      experiences: {
        create: profileData.experience.map((experience) => ({
          ...experience,
          startDate: experience.timePeriod.startDate
            ? new Date(experience.timePeriod.startDate.month)
            : null,
          endDate: experience.timePeriod.endDate
            ? new Date(experience.timePeriod.endDate.month)
            : null,
          company: {
            create: {
              name: experience.companyName,
              employeeCountRange: experience.company?.employeeCountRange || null,
              industries: experience.company?.industries || [],
            },
          },
        })),
      },
    });

    return createdProfile;
  }
}
