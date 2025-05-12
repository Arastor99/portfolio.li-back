import { ProfileResponse } from '../apis/profile-response';
import { Profile } from '../types/common';
import { extractEntityUrn } from './common';

export function adaptProfileResponse(response?: any): Profile {
  const profileResponse = response?.profile as ProfileResponse | undefined;

  let memberWithBackgroundImg = profileResponse?.projects
    ?.find((project) =>
      project?.members?.find(
        (member) =>
          extractEntityUrn(member?.profileUrn) ===
          extractEntityUrn(profileResponse?.entityUrn),
      ),
    )
    ?.members?.find(
      (member) =>
        extractEntityUrn(member?.profileUrn) ===
        extractEntityUrn(profileResponse?.entityUrn),
    )?.member;

  if (!memberWithBackgroundImg)
    memberWithBackgroundImg = profileResponse?.publications
      ?.find((publication) =>
        publication?.authors?.find(
          (member) =>
            extractEntityUrn(member?.profileUrn) ===
            extractEntityUrn(profileResponse?.entityUrn),
        ),
      )
      ?.authors?.find(
        (member) =>
          extractEntityUrn(member?.profileUrn) ===
          extractEntityUrn(profileResponse?.entityUrn),
      )?.member;

  return {
    firstName: profileResponse?.firstName,
    lastName: profileResponse?.lastName,
    publicId: profileResponse?.public_id,
    headline: profileResponse?.headline,
    summary: profileResponse?.summary,

    profilePictureUrl: profileResponse?.displayPictureUrl
      ? `${profileResponse.displayPictureUrl}${
          profileResponse?.img_800_800 ||
          profileResponse?.img_400_400 ||
          profileResponse?.img_200_200 ||
          profileResponse?.img_100_100 ||
          ''
        }`
      : undefined,

    backgroundPictureUrl: memberWithBackgroundImg?.backgroundImage?.[
      'com.linkedin.common.VectorImage'
    ]
      ? `${memberWithBackgroundImg.backgroundImage['com.linkedin.common.VectorImage'].rootUrl}${
          memberWithBackgroundImg.backgroundImage[
            'com.linkedin.common.VectorImage'
          ].artifacts?.[1]?.fileIdentifyingUrlPathSegment ||
          memberWithBackgroundImg.backgroundImage[
            'com.linkedin.common.VectorImage'
          ].artifacts?.[0]?.fileIdentifyingUrlPathSegment ||
          ''
        }`
      : undefined,

    birthDay: profileResponse?.birthDate?.day,
    birthMonth: profileResponse?.birthDate?.month,

    industryName: profileResponse?.industryName,
    student: profileResponse?.student ?? false,
    locationName: profileResponse?.locationName,
    geoCountryName: profileResponse?.geoCountryName,
    geoLocationName: profileResponse?.geoLocationName,

    experiences:
      profileResponse?.experience?.map((exp) => ({
        title: exp?.title,
        description: exp?.description,
        startDate: exp?.timePeriod?.startDate
          ? new Date(
              exp.timePeriod.startDate.year,
              exp.timePeriod.startDate.month
                ? exp.timePeriod.startDate.month - 1
                : 0,
            )
          : undefined,
        endDate: exp?.timePeriod?.endDate
          ? new Date(
              exp.timePeriod.endDate.year,
              exp.timePeriod.endDate.month
                ? exp.timePeriod.endDate.month - 1
                : 0,
            )
          : undefined,
        locationName: exp?.locationName,
        geoLocationName: exp?.geoLocationName,
        companyName: exp?.companyName,
        companyLogoUrl: exp?.companyLogoUrl,
        companyEmployees: exp?.company?.employeeCountRange
          ? `${exp.company.employeeCountRange.start}-${exp.company.employeeCountRange.end}`
          : undefined,
        companyIndustries: exp?.company?.industries || [],
      })) || [],

    education:
      profileResponse?.education?.map((edu) => ({
        schoolName: edu?.schoolName,
        schoolLogoUrl: edu?.school?.logoUrl,
        degreeName: edu?.degreeName,
        grade: edu?.grade,
        fieldOfStudy: edu?.fieldOfStudy,
        startYear: edu?.timePeriod?.startDate?.year,
        endYear: edu?.timePeriod?.endDate?.year,
        activities: edu?.activities,
        description: edu?.description,
      })) || [],

    languages:
      profileResponse?.languages?.map((lang) => ({
        name: lang?.name?.trim(),
        proficiency: lang?.proficiency,
      })) || [],

    publications:
      profileResponse?.publications?.map((pub) => ({
        name: pub?.name,
        publisher: pub?.publisher,
        description: pub?.description,
        url: pub?.url,
      })) || [],

    certifications:
      profileResponse?.certifications?.map((cert) => ({
        authority: cert?.authority,
        name: cert?.name,
        url: cert?.url || '',
        startDate: cert?.timePeriod?.startDate
          ? new Date(
              cert.timePeriod.startDate.year,
              cert.timePeriod.startDate.month
                ? cert.timePeriod.startDate.month - 1
                : 0,
            )
          : undefined,
        endDate: cert?.timePeriod?.endDate
          ? new Date(
              cert.timePeriod.endDate.year,
              cert.timePeriod.endDate.month
                ? cert.timePeriod.endDate.month - 1
                : 0,
            )
          : undefined,
        companyName: cert?.company?.name,
        companyLogoUrl: cert?.company?.logo?.['com.linkedin.common.VectorImage']
          ?.artifacts?.[0]
          ? `${cert.company.logo['com.linkedin.common.VectorImage'].rootUrl}${
              cert.company.logo['com.linkedin.common.VectorImage'].artifacts[0]
                .fileIdentifyingUrlPathSegment
            }`
          : undefined,
      })) || [],

    volunteer:
      profileResponse?.volunteer?.map((vol) => ({
        role: vol?.role,
        description: vol?.description,
        cause: vol?.cause,
        startDate: vol?.timePeriod?.startDate
          ? new Date(
              vol.timePeriod.startDate.year,
              vol.timePeriod.startDate.month
                ? vol.timePeriod.startDate.month - 1
                : 0,
            )
          : undefined,
        endDate: vol?.timePeriod?.endDate
          ? new Date(
              vol.timePeriod.endDate.year,
              vol.timePeriod.endDate.month
                ? vol.timePeriod.endDate.month - 1
                : 0,
            )
          : undefined,
        companyName: vol?.companyName,
        companyLogoUrl: vol?.company?.miniCompany?.logo?.[
          'com.linkedin.common.VectorImage'
        ]?.artifacts?.[0]
          ? `${vol.company.miniCompany.logo['com.linkedin.common.VectorImage'].rootUrl}${
              vol.company.miniCompany.logo['com.linkedin.common.VectorImage']
                .artifacts[0].fileIdentifyingUrlPathSegment
            }`
          : undefined,
      })) || [],

    honors:
      profileResponse?.honors?.map((honor) => ({
        title: honor?.title,
        issuer: honor?.issuer,
        issueDate: honor?.issueDate
          ? new Date(
              honor.issueDate.year,
              honor.issueDate.month ? honor.issueDate.month - 1 : 0,
            )
          : undefined,
      })) || [],

    projects:
      profileResponse?.projects?.map((proj) => ({
        title: proj?.title,
        description: proj?.description,
        startDate: proj?.timePeriod?.startDate
          ? new Date(
              proj.timePeriod.startDate.year,
              proj.timePeriod.startDate.month
                ? proj.timePeriod.startDate.month - 1
                : 0,
            )
          : undefined,
        endDate: proj?.timePeriod?.endDate
          ? new Date(
              proj.timePeriod.endDate.year,
              proj.timePeriod.endDate.month
                ? proj.timePeriod.endDate.month - 1
                : 0,
            )
          : undefined,
      })) || [],

    skills:
      profileResponse?.skills?.map((skill) => ({
        name: skill?.name,
      })) || [],
  };
}
