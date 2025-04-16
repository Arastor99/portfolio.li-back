export interface ProfileResponse {
  summary?: string;
  industryName?: string;
  lastName: string;
  locationName?: string;
  student: boolean;
  geoCountryName?: string;
  geoCountryUrn?: string;
  geoLocationBackfilled?: boolean;
  elt?: boolean;
  industryUrn?: string;
  firstName: string;
  entityUrn?: string;

  birthDate?: {
    day?: number;
    month?: number;
  };

  geoLocation?: {
    geoUrn?: string;
  };
  geoLocationName?: string;
  location?: {
    basicLocation?: {
      countryCode?: string;
    };
  };
  headline?: string;
  displayPictureUrl?: string;
  img_100_100?: string;
  img_200_200?: string;
  img_400_400?: string;
  img_800_800?: string;
  profile_id?: string;
  profile_urn?: string;
  member_urn?: string;
  public_id: string;

  experience?: Array<{
    locationName?: string;
    geoUrn?: string;
    companyName?: string;
    description?: string;
    title: string;
    companyUrn?: string;
    honors?: string[];
    entityUrn?: string;
    geoLocationName?: string;
    timePeriod?: {
      startDate?: {
        month?: number;
        year?: number;
      };
      endDate?: {
        month?: number;
        year?: number;
      };
    };
    company?: {
      employeeCountRange?: {
        start?: number;
        end?: number;
      };
      industries?: string[];
    };
    region?: string;
    companyLogoUrl?: string;
  }>;

  education?: Array<{
    entityUrn?: string;
    school?: {
      objectUrn?: string;
      entityUrn?: string;
      active?: boolean;
      schoolName: string;
      trackingId?: string;
      logoUrl?: string;
    };
    grade?: string;
    timePeriod?: {
      startDate?: {
        month?: number;
        year?: number;
      };
      endDate?: {
        month?: number;
        year?: number;
      };
    };
    activities?: string;
    description?: string;
    degreeName?: string;
    schoolName: string;
    fieldOfStudy?: string;
    honors?: string[];
    degreeUrn?: string;
    schoolUrn?: string;
  }>;

  languages?: Array<{
    name: string;
    proficiency: string;
  }>;

  publications?: Array<{
    date?: {
      month?: number;
      year?: number;
      day?: number;
    };
    name: string;
    publisher: string;
    description?: string;
    url: string;
    authors?: Array<{
      member?: {
        firstName?: string;
        lastName?: string;
        dashEntityUrn?: string;
        occupation?: string;
        objectUrn?: string;
        entityUrn?: string;
        backgroundImage?: {
          'com.linkedin.common.VectorImage'?: {
            artifacts?: Array<{
              width?: number;
              fileIdentifyingUrlPathSegment?: string;
              expiresAt?: number;
              height?: number;
            }>;
            rootUrl?: string;
          };
        };
        publicIdentifier?: string;
        picture?: {
          'com.linkedin.common.VectorImage'?: {
            artifacts?: Array<{
              width?: number;
              fileIdentifyingUrlPathSegment?: string;
              expiresAt?: number;
              height?: number;
            }>;
            rootUrl?: string;
          };
        };
        trackingId?: string;
      };
      profileUrn?: string;
    }>;
  }>;

  certifications?: Array<{
    authority?: string;
    name: string;
    timePeriod?: {
      startDate?: {
        month?: number;
        year?: number;
      };
      endDate?: {
        month?: number;
        year?: number;
      };
    };
    company?: {
      objectUrn?: string;
      entityUrn?: string;
      name?: string;
      showcase?: boolean;
      active?: boolean;
      logo?: {
        'com.linkedin.common.VectorImage'?: {
          artifacts?: Array<{
            width?: number;
            fileIdentifyingUrlPathSegment?: string;
            expiresAt?: number;
            height?: number;
          }>;
          rootUrl?: string;
        };
      };
      universalName?: string;
      dashCompanyUrn?: string;
      trackingId?: string;
    };
    displaySource?: string;
    companyUrn?: string;
    url: string;
  }>;

  volunteer?: Array<{
    role: string;
    companyName?: string;
    timePeriod?: {
      startDate?: {
        month?: number;
        year?: number;
      };
      endDate?: {
        month?: number;
        year?: number;
      };
    };
    cause?: string;
    description?: string;
    company?: {
      miniCompany?: {
        objectUrn?: string;
        entityUrn?: string;
        name?: string;
        showcase?: boolean;
        active?: boolean;
        logo?: {
          'com.linkedin.common.VectorImage'?: {
            artifacts?: Array<{
              width?: number;
              fileIdentifyingUrlPathSegment?: string;
              expiresAt?: number;
              height?: number;
            }>;
            rootUrl?: string;
          };
        };
        universalName?: string;
        dashCompanyUrn?: string;
        trackingId?: string;
      };
    };
    companyUrn?: string;
  }>;

  honors?: Array<{
    occupation?: string;
    title: string;
    issueDate?: {
      month?: number;
      year?: number;
    };
    issuer?: string;
  }>;

  projects?: Array<{
    occupation?: string;
    members?: Array<{
      member?: {
        firstName?: string;
        lastName?: string;
        dashEntityUrn?: string;
        occupation?: string;
        objectUrn?: string;
        entityUrn?: string;
        backgroundImage?: {
          'com.linkedin.common.VectorImage'?: {
            artifacts?: Array<{
              width?: number;
              fileIdentifyingUrlPathSegment?: string;
              expiresAt?: number;
              height?: number;
            }>;
            rootUrl?: string;
          };
        };
        publicIdentifier?: string;
        picture?: {
          'com.linkedin.common.VectorImage'?: {
            artifacts?: Array<{
              width?: number;
              fileIdentifyingUrlPathSegment?: string;
              expiresAt?: number;
              height?: number;
            }>;
            rootUrl?: string;
          };
        };
        trackingId?: string;
      };
      entityUrn?: string;
      profileUrn?: string;
    }>;
    timePeriod?: {
      startDate?: {
        month?: number;
        year?: number;
      };
      endDate?: {
        month?: number;
        year?: number;
      };
    };
    description?: string;
    title: string;
  }>;

  skills?: Array<{
    name: string;
  }>;

  urn_id?: string;
}
