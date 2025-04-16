import { Injectable } from '@nestjs/common';
import ProfileExtractionApiService from 'src/common/apis/profile-extraction-api.service';
import { Profile } from 'src/common/types/common';
import { adaptProfileResponse } from 'src/common/utils/adapter';
import { ProfileDbService } from 'src/models/profile/profile.db.service';

@Injectable()
export class ProfileService {
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
    return this.profileDbService.create(profileData);
  }

  private async getProfile(publicId: string) {
    const profile = await this.profileDbService.findOne({
      where: { publicId },
    });

    if (!profile) {
      const profileData =
        await this.profileExtractionApiService.getProfile(publicId);

      if (!profileData) {
        throw new Error('Profile data is empty or null');
      }

      const adaptedProfile = adaptProfileResponse(profileData);
      const newProfile = await this.createProfile(adaptedProfile);

      return newProfile;
    }

    return profile;
  }

  async importLinkedInProfile(params: { userId?: string; publicId: string }) {
    const { userId, publicId } = params;

    const profile = await this.getProfile(publicId);

    if (!profile) {
      throw new Error('Profile not found');
    }

    // Relacionar el perfil con el usuario
    if (userId) {
      await this.profileDbService.update({
        where: { publicId },
        data: {
          users: {
            connect: {
              id: userId,
            },
          },
        },
      });
    }

    return profile;
  }
}
