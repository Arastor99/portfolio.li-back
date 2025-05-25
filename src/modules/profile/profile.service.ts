/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestException,
  Injectable,
  Logger,
  ServiceUnavailableException,
} from '@nestjs/common';
import {
  Certification,
  Education,
  Experience,
  Honor,
  Project,
  Publication,
  Skill,
  Volunteer,
  Launguages,
} from '@prisma/client';
import ProfileExtractionApiService from 'src/common/apis/profile-extraction-api.service';
import { Profile } from 'src/common/types/common';
import { adaptProfileResponse } from 'src/common/utils/adapter';
import { ProfileDbService } from 'src/models/profile/profile.db.service';

@Injectable()
export class ProfileService {
  private readonly logger = new Logger(ProfileService.name);

  constructor(
    private readonly profileDbService: ProfileDbService,
    private readonly profileExtractionApiService: ProfileExtractionApiService,
  ) {}

  private async createProfile(adaptedProfile: Profile) {
    // Transform profile data to match the database schema
    const profileData = {
      firstName: adaptedProfile.firstName,
      lastName: adaptedProfile.lastName,
      publicId: adaptedProfile.publicId,
      headline: adaptedProfile.headline,
      summary: adaptedProfile.summary,
      profilePictureUrl: adaptedProfile.profilePictureUrl,
      backgroundPictureUrl: adaptedProfile.backgroundPictureUrl,
      birthDay: adaptedProfile.birthDay,
      birthMonth: adaptedProfile.birthMonth,
      industryName: adaptedProfile.industryName,
      student: adaptedProfile.student,
      locationName: adaptedProfile.locationName,
      geoCountryName: adaptedProfile.geoCountryName,
      geoLocationName: adaptedProfile.geoLocationName,

      // Relaciones
      experiences:
        adaptedProfile.experiences?.length > 0
          ? {
              create: adaptedProfile.experiences.map((exp) => ({
                title: exp.title,
                description: exp.description,
                startDate: exp.startDate,
                endDate: exp.endDate,
                locationName: exp.locationName,
                geoLocationName: exp.geoLocationName,
                companyName: exp.companyName,
                companyLogoUrl: exp.companyLogoUrl,
                companyEmployees: exp.companyEmployees,
                companyIndustries: exp.companyIndustries,
              })),
            }
          : undefined,

      education:
        adaptedProfile.education?.length > 0
          ? {
              create: adaptedProfile.education.map((edu) => ({
                schoolName: edu.schoolName,
                schoolLogoUrl: edu.schoolLogoUrl,
                degreeName: edu.degreeName,
                grade: edu.grade,
                fieldOfStudy: edu.fieldOfStudy,
                startYear: edu.startYear,
                endYear: edu.endYear,
                activities: edu.activities,
                description: edu.description,
              })),
            }
          : undefined,

      languages:
        adaptedProfile.languages?.length > 0
          ? {
              create: adaptedProfile.languages.map((lang) => ({
                name: lang.name,
                proficiency: lang.proficiency,
              })),
            }
          : undefined,

      publications:
        adaptedProfile.publications?.length > 0
          ? {
              create: adaptedProfile.publications.map((pub) => ({
                name: pub.name,
                publisher: pub.publisher,
                description: pub.description,
                url: pub.url,
              })),
            }
          : undefined,

      certifications:
        adaptedProfile.certifications?.length > 0
          ? {
              create: adaptedProfile.certifications.map((cert) => ({
                authority: cert.authority,
                name: cert.name,
                url: cert.url,
                startDate: cert.startDate,
                endDate: cert.endDate,
                companyName: cert.companyName,
                companyLogoUrl: cert.companyLogoUrl,
              })),
            }
          : undefined,

      volunteer:
        adaptedProfile.volunteer?.length > 0
          ? {
              create: adaptedProfile.volunteer.map((vol) => ({
                role: vol.role,
                description: vol.description,
                cause: vol.cause,
                startDate: vol.startDate,
                endDate: vol.endDate,
                companyName: vol.companyName,
                companyLogoUrl: vol.companyLogoUrl,
              })),
            }
          : undefined,

      honors:
        adaptedProfile.honors?.length > 0
          ? {
              create: adaptedProfile.honors.map((honor) => ({
                title: honor.title,
                description: honor.description,
                issueDate: honor.issueDate,
                issuer: honor.issuer,
              })),
            }
          : undefined,

      projects:
        adaptedProfile.projects?.length > 0
          ? {
              create: adaptedProfile.projects.map((proj) => ({
                title: proj.title,
                description: proj.description,
                startDate: proj.startDate,
                endDate: proj.endDate,
              })),
            }
          : undefined,

      skills:
        adaptedProfile.skills?.length > 0
          ? {
              create: adaptedProfile.skills.map((skill) => ({
                name: skill.name,
              })),
            }
          : undefined,
    };

    // Create the profile in the database
    return await this.profileDbService.createOrUpdate({
      where: {
        publicId_userMockedId: {
          publicId: adaptedProfile.publicId,
          userMockedId: 'WAITING_FOR_USER',
        },
      },
      data: { ...profileData, userMockedId: 'WAITING_FOR_USER' },
    });
  }

  private async getProfile(publicId: string) {
    const profile = await this.profileDbService.findOne({
      where: {
        publicId_userMockedId: {
          publicId: publicId,
          userMockedId: 'WAITING_FOR_USER',
        },
      },
      include: {
        certifications: true,
        education: true,
        experiences: true,
        honors: true,
        languages: true,
        publications: true,
        projects: true,
        skills: true,
        volunteer: true,
      },
    });

    if (!profile) {
      const profileData =
        await this.profileExtractionApiService.getProfile(publicId);

      if (!profileData) throw new Error('Profile data is empty or null');

      const adaptedProfile = adaptProfileResponse(profileData);
      const newProfile = await this.createProfile(adaptedProfile);
      const profileWithRelations = await this.profileDbService.findOne({
        where: { id: newProfile.id },
        include: {
          certifications: true,
          education: true,
          experiences: true,
          honors: true,
          languages: true,
          publications: true,
          projects: true,
          skills: true,
          volunteer: true,
        },
      });
      return profileWithRelations;
    }

    return profile;
  }

  async importLinkedInProfile(params: { publicId: string }) {
    const { publicId } = params;

    try {
      const profile = await this.getProfile(publicId);

      if (!profile) {
        throw new Error('Profile not found');
      }

      // If a userId is provided, associate the profile with the user

      return profile;
    } catch (error) {
      this.logger.error('Error importing LinkedIn profile', error);
      this.logger.debug('Error details', error);
      if (error.status === 503) {
        throw new ServiceUnavailableException(
          'Service is temporarily unavailable',
        );
      }
      throw new BadRequestException('Failed to fetch profile data');
    }
  }

  async getProfileByUserId(userId: string) {
    const profile = await this.profileDbService.findOne({
      where: {
        userId,
      },
      include: {
        certifications: true,
        education: true,
        experiences: true,
        honors: true,
        languages: true,
        publications: true,
        projects: true,
        skills: true,
        volunteer: true,
      },
    });

    if (!profile) throw new BadRequestException('Profile not found');

    return profile;
  }

  async updateProfileByUserId(userId: string, profileDto: Partial<Profile>) {
    const profile = await this.profileDbService.findOne({
      where: {
        userId,
      },
    });

    if (!profile) throw new BadRequestException('Profile not found');

    type WithProfileId<T> = T & { profileId?: string };

    return await this.profileDbService.update({
      where: {
        id: profile.id,
      },
      data: {
        ...profileDto,
        id: undefined,

        ...(profileDto.experiences && {
          experiences: {
            deleteMany: {},
            create: (profileDto.experiences as WithProfileId<Experience[]>).map(
              ({ profileId, ...exp }) => exp,
            ),
          },
        }),

        ...(profileDto.education && {
          education: {
            deleteMany: {},
            create: (profileDto.education as WithProfileId<Education[]>).map(
              ({ profileId, ...edu }) => edu,
            ),
          },
        }),

        ...(profileDto.languages && {
          languages: {
            deleteMany: {},
            create: (profileDto.languages as WithProfileId<Launguages[]>).map(
              ({ profileId, ...lang }) => lang,
            ),
          },
        }),

        ...(profileDto.publications && {
          publications: {
            deleteMany: {},
            create: (
              profileDto.publications as WithProfileId<Publication[]>
            ).map(({ profileId, ...pub }) => pub),
          },
        }),

        ...(profileDto.certifications && {
          certifications: {
            deleteMany: {},
            create: (
              profileDto.certifications as WithProfileId<Certification[]>
            ).map(({ profileId, ...cert }) => cert),
          },
        }),

        ...(profileDto.volunteer && {
          volunteer: {
            deleteMany: {},
            create: (profileDto.volunteer as WithProfileId<Volunteer[]>).map(
              ({ profileId, ...vol }) => vol,
            ),
          },
        }),

        ...(profileDto.honors && {
          honors: {
            deleteMany: {},
            create: (profileDto.honors as WithProfileId<Honor[]>).map(
              ({ profileId, ...honor }) => honor,
            ),
          },
        }),

        ...(profileDto.projects && {
          projects: {
            deleteMany: {},
            create: (profileDto.projects as WithProfileId<Project[]>).map(
              ({ profileId, ...proj }) => proj,
            ),
          },
        }),

        ...(profileDto.skills && {
          skills: {
            deleteMany: {},
            create: (profileDto.skills as WithProfileId<Skill[]>).map(
              ({ profileId, ...skill }) => skill,
            ),
          },
        }),
      },
    });
  }

  async attachProfileToUser(userId: string, publicId: string) {
    const profile = await this.profileDbService.findOne({
      where: {
        publicId_userMockedId: {
          publicId,
          userMockedId: 'WAITING_FOR_USER',
        },
      },
    });

    if (!profile) throw new BadRequestException('Profile not found');

    const profileUser = await this.profileDbService.findOne({
      where: {
        userId,
      },
    });

    if (!profileUser)
      throw new BadRequestException('User has already a profile');

    this.logger.debug('Attaching profile to user', {
      profileId: profile.id,
      userId,
    });

    return await this.profileDbService.update({
      where: {
        id: profile.id,
      },
      data: {
        userMockedId: userId,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }
}
