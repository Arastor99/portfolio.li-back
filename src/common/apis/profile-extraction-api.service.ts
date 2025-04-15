import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
class ProfileExtractionApiService {
  private readonly logger = new Logger(ProfileExtractionApiService.name);
  constructor(private readonly configService: ConfigService) {}

  async getProfile(publicId: string) {
    this.logger.debug(`Fetching profile with publicId: ${publicId}`);
    // await fetch('api')
    return profile_1;
  }
}

export default ProfileExtractionApiService;

const profile_1 = {
  summary:
    "I was born on the 12th of February of 1985 in Barcelona. I'm a passionate about programming since a child. I started playing with Locomotive BASIC with an Amstrad CPC which give as a present to me my father. Since then to today I've used a lot of technologies and different programming languages.\n\nOne of my biggest motivations is learn. That's why I started to self-taught, reading books and seeking tutorials about computer science. Years later I completed a computer engineering at Open University of Catalonia. Since then I have not stopped to keep working as a developer and keep learning.\n\nI like assist to developer meetings, conferences, do workshops and share knowledge. The best place to work is where I can improve constantly.",
  industryName: 'Software Development',
  lastName: 'Durán García',
  locationName: 'Spain',
  student: false,
  geoCountryName: 'Spain',
  geoCountryUrn: 'urn:li:fs_geo:105646813',
  maidenName: 'midudev',
  geoLocationBackfilled: false,
  elt: false,
  birthDate: { month: 2, day: 12 },
  industryUrn: 'urn:li:fs_industry:4',
  firstName: 'Miguel Angel',
  entityUrn: 'urn:li:fs_profile:ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE',
  geoLocation: { geoUrn: 'urn:li:fs_geo:90009761' },
  geoLocationName: 'Greater Barcelona Metropolitan Area',
  location: { basicLocation: { countryCode: 'es' } },
  headline:
    'Software Engineer and Web Developer. Awarded as GitHub Star, Microsoft MVP, and Google Developer Expert.',
  displayPictureUrl:
    'https://media.licdn.com/dms/image/v2/D4D03AQHigBNGVqRnOA/profile-displayphoto-shrink_',
  img_100_100:
    '100_100/profile-displayphoto-shrink_100_100/0/1723639491706?e=1734566400&v=beta&t=1CPxMGSx7txogjotUOvW74eXB7Fzx0gAPMnc2OYOft4',
  img_200_200:
    '200_200/profile-displayphoto-shrink_200_200/0/1723639491706?e=1734566400&v=beta&t=bB2cJ0rzMu75ycRmLsuLvnTCoGAzsJvdkI8ZBXFGzN4',
  img_400_400:
    '400_400/profile-displayphoto-shrink_400_400/0/1723639491706?e=1734566400&v=beta&t=EVSvZcB95zW1Xj9PHkPyUWbnmeN3OI5AkZ7MoYB1-PU',
  img_800_800:
    '800_800/profile-displayphoto-shrink_800_800/0/1723639491740?e=1734566400&v=beta&t=8AONwDo9HclQDp8PyNmma8whd9FAv7GvOIbbDMOu4Sc',
  profile_id: 'ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE',
  profile_urn: 'urn:li:fs_miniProfile:ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE',
  member_urn: 'urn:li:member:38364063',
  public_id: 'midudev',
  experience: [
    {
      locationName: 'Spain',
      entityUrn:
        'urn:li:fs_position:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,2033270871)',
      geoLocationName: 'Spain',
      companyName: 'midudev',
      timePeriod: { startDate: { month: 1, year: 2021 } },
      description:
        '- Most-watched Spanish programming streamer on Twitch (https://twitch.tv/midudev)\n- I spread knowledge about Programming and Development on various social media platforms.\n- 2 YouTube channels with over 250,000 and 100,000 subscribers each.\n- +315,000 followers on Instagram.',
      company: {
        employeeCountRange: { start: 2, end: 10 },
        industries: ['Computer Software'],
      },
      title: 'Content Creator about Programming and Web Technologies',
      companyUrn: 'urn:li:fs_miniCompany:40649878',
      companyLogoUrl:
        'https://media.licdn.com/dms/image/v2/C4D0BAQEJtiWsqQ3A4w/company-logo_',
    },
    {
      locationName: 'Barcelona y alrededores, España',
      entityUrn:
        'urn:li:fs_position:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,818085975)',
      geoLocationName: 'Barcelona y alrededores, España',
      companyName: 'Adevinta Spain',
      timePeriod: {
        endDate: { month: 9, year: 2022 },
        startDate: { month: 6, year: 2016 },
      },
      description:
        'Soy parte del equipo Enablers Frontend en Adevinta Spain. Nuestra misión es conseguir que todos nuestros verticales (Fotocasa, MilAnuncios, Habitaclia, Coches.net, Infojobs) converjan tecnológicamente, tener una arquitectura moderna, flexible y optimizada, y la excelencia tecnológica de los desarrolladores, fomentando buenas prácticas y dando talleres para compartir conocimiento.',
      company: {
        employeeCountRange: { start: 1001, end: 5000 },
        industries: ['Computer Software'],
      },
      title: 'Lead Frontend Architect',
      companyUrn: 'urn:li:fs_miniCompany:13981594',
      companyLogoUrl:
        'https://media.licdn.com/dms/image/v2/D4D0BAQFr-C_hHNCaog/company-logo_',
    },
    {
      locationName: 'el Prat de Llobregat',
      entityUrn:
        'urn:li:fs_position:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,293442185)',
      geoLocationName: 'el Prat de Llobregat',
      companyName: 'Uikú Coworking el Prat',
      timePeriod: {
        endDate: { month: 4, year: 2022 },
        startDate: { month: 6, year: 2012 },
      },
      description:
        'Socio fundador de la cooperativa de servicios creada para crear un espacio de coworking como actividad principal.',
      company: {
        employeeCountRange: { start: 0, end: 1 },
        industries: ['Consumer Services'],
      },
      title: 'Socio fundador',
      companyUrn: 'urn:li:fs_miniCompany:2622148',
      companyLogoUrl:
        'https://media.licdn.com/dms/image/v2/C510BAQGTsoZPhjveeA/company-logo_',
    },
    {
      locationName: 'Barcelona Area, Spain',
      entityUrn:
        'urn:li:fs_position:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,1382341180)',
      geoLocationName: 'Barcelona Area, Spain',
      geoUrn: 'urn:li:fs_geo:90009761',
      companyName: 'Sublime Codes',
      timePeriod: {
        endDate: { month: 2, year: 2022 },
        startDate: { month: 10, year: 2018 },
      },
      description:
        'Code consultancy studio. We help you creating your next MVP or project with care, focusing on quality and endurability. Best-in-class projects based on Javascript, ReactJS, GraphQL and Node.',
      title: 'Co-Founder and Software Engineer',
      region: 'urn:li:fs_region:(es,5064)',
    },
    {
      locationName: 'Barcelona y alrededores, España',
      entityUrn:
        'urn:li:fs_position:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,883836890)',
      geoLocationName: 'Barcelona y alrededores, España',
      geoUrn: 'urn:li:fs_geo:90009761',
      companyName: 'Typeform.com',
      timePeriod: {
        endDate: { month: 1, year: 2017 },
        startDate: { month: 11, year: 2016 },
      },
      company: {
        employeeCountRange: { start: 201, end: 500 },
        industries: ['Computer Software'],
      },
      title: 'Front End Engineer',
      region: 'urn:li:fs_region:(es,5064)',
      companyUrn: 'urn:li:fs_miniCompany:3226972',
      companyLogoUrl:
        'https://media.licdn.com/dms/image/v2/D560BAQFy5KmPrKEGYQ/company-logo_',
    },
  ],
  education: [
    {
      courses: [
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,266)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,267)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,268)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,269)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,270)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,271)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,272)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,273)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,274)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,275)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,276)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,277)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,278)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,279)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,280)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,281)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,282)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,283)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,284)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,285)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,286)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,287)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,288)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,289)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,290)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,291)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,292)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,293)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,294)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,295)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,296)',
        'urn:li:fs_course:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,297)',
      ],
      entityUrn:
        'urn:li:fs_education:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,41471838)',
      school: {
        objectUrn: 'urn:li:school:12260',
        entityUrn: 'urn:li:fs_miniSchool:12260',
        active: true,
        schoolName: 'Universitat Oberta de Catalunya',
        trackingId: 'rjwuhxhdRpKy0nk9gCbfrA==',
        logoUrl:
          'https://media.licdn.com/dms/image/v2/D4D0BAQEyUV6w_gu7xw/company-logo_',
      },
      timePeriod: { endDate: { year: 2009 }, startDate: { year: 2003 } },
      degreeName: 'Ingeniería de Software',
      schoolName: 'Universitat Oberta de Catalunya',
      fieldOfStudy: '(Informática, Economía, Márketing, Física, Matemáticas)',
      schoolUrn: 'urn:li:fs_miniSchool:12260',
    },
    {
      entityUrn:
        'urn:li:fs_education:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,137316170)',
      school: {
        objectUrn: 'urn:li:school:12261',
        entityUrn: 'urn:li:fs_miniSchool:12261',
        active: true,
        schoolName: 'Universitat Politècnica de Catalunya',
        trackingId: 'fG2SlIOlQtarLtjzCMSwVA==',
        logoUrl:
          'https://media.licdn.com/dms/image/v2/C4D0BAQEmGYkHUN31VA/company-logo_',
      },
      activities: 'Profesor Taller de Guitarra durante tres cursos.',
      timePeriod: { endDate: { year: 2007 }, startDate: { year: 2004 } },
      degreeName: 'Ingeniero Técnico en Informática de Gestión',
      schoolName: 'Universitat Politècnica de Catalunya',
      fieldOfStudy:
        'Director de proyectos TIC, Desarrollador de aplicaciones, Planificador de Productos,',
      schoolUrn: 'urn:li:fs_miniSchool:12261',
    },
  ],
  languages: [
    { name: 'Catalán', proficiency: 'FULL_PROFESSIONAL' },
    { name: 'Español', proficiency: 'NATIVE_OR_BILINGUAL' },
    { name: 'Inglés', proficiency: 'PROFESSIONAL_WORKING' },
  ],
  publications: [],
  certifications: [],
  volunteer: [],
  honors: [
    {
      description:
        'Por mi labor en la creación de Contenido y la Divulgación sobre Programación.',
      title: 'Microsoft MVP Developer Technologies',
      issueDate: { month: 1, year: 2023 },
      issuer: 'Microsoft',
    },
    {
      description:
        'Reconocimiento por mi labor como Divulgador de Programación y Desarrollo Web.',
      title: 'Google Developer Expert',
      issueDate: { month: 7, year: 2021 },
      issuer: 'Google',
    },
    {
      description:
        'Reconocimiento de GitHub por mi impacto en la comunidad de desarrollo y programación.',
      title: 'GitHub Star ⭐️',
      issueDate: { month: 8, year: 2020 },
      issuer: 'GitHub',
    },
  ],
  projects: [
    {
      occupation:
        'urn:li:fs_position:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,230932600)',
      members: [
        {
          member: {
            firstName: 'Miguel Angel',
            lastName: 'Durán García',
            dashEntityUrn:
              'urn:li:fsd_profile:ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE',
            occupation:
              'Software Engineer and Web Developer. Awarded as GitHub Star, Microsoft MVP, and Google Developer Expert.',
            objectUrn: 'urn:li:member:38364063',
            entityUrn:
              'urn:li:fs_miniProfile:ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE',
            backgroundImage: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 800,
                    fileIdentifyingUrlPathSegment:
                      '200_800/profile-displaybackgroundimage-shrink_200_800/0/1705658623328?e=1734566400&v=beta&t=Kl7BZBZKoRYfXP8Czmhb2KMAopgbuFZLoSZpKs_6imI',
                    expiresAt: 1734566400000,
                    height: 199,
                  },
                  {
                    width: 1400,
                    fileIdentifyingUrlPathSegment:
                      '350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1705658623328?e=1734566400&v=beta&t=_PnZLYQsYcG2lwdsVSHCfXrWrKCcJXvacPWxp4_3sRQ',
                    expiresAt: 1734566400000,
                    height: 349,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/D4D16AQH0oWjGlgAj5A/profile-displaybackgroundimage-shrink_',
              },
            },
            publicIdentifier: 'midudev',
            picture: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 100,
                    fileIdentifyingUrlPathSegment:
                      '100_100/profile-displayphoto-shrink_100_100/0/1723639491706?e=1734566400&v=beta&t=1CPxMGSx7txogjotUOvW74eXB7Fzx0gAPMnc2OYOft4',
                    expiresAt: 1734566400000,
                    height: 100,
                  },
                  {
                    width: 200,
                    fileIdentifyingUrlPathSegment:
                      '200_200/profile-displayphoto-shrink_200_200/0/1723639491706?e=1734566400&v=beta&t=bB2cJ0rzMu75ycRmLsuLvnTCoGAzsJvdkI8ZBXFGzN4',
                    expiresAt: 1734566400000,
                    height: 200,
                  },
                  {
                    width: 400,
                    fileIdentifyingUrlPathSegment:
                      '400_400/profile-displayphoto-shrink_400_400/0/1723639491706?e=1734566400&v=beta&t=EVSvZcB95zW1Xj9PHkPyUWbnmeN3OI5AkZ7MoYB1-PU',
                    expiresAt: 1734566400000,
                    height: 400,
                  },
                  {
                    width: 800,
                    fileIdentifyingUrlPathSegment:
                      '800_800/profile-displayphoto-shrink_800_800/0/1723639491740?e=1734566400&v=beta&t=8AONwDo9HclQDp8PyNmma8whd9FAv7GvOIbbDMOu4Sc',
                    expiresAt: 1734566400000,
                    height: 800,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/D4D03AQHigBNGVqRnOA/profile-displayphoto-shrink_',
              },
            },
            trackingId: 'SVfhaGTMQymShms6Bo2uaA==',
          },
          entityUrn:
            'urn:li:fs_contributor:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,1510827092,1)',
          profileUrn:
            'urn:li:fs_miniProfile:ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE',
        },
      ],
      timePeriod: {
        endDate: { month: 3, year: 2015 },
        startDate: { month: 3, year: 2015 },
      },
      description:
        'Página web desarrollada en Wordpress del programa de radio Luces en la Oscuridad, un programa líder de audiencia en las radios españolas y sudamericanas.',
      title: 'Web Luces en La Oscuridad',
      url: 'http://lucesenlaosscuridad.es',
    },
    {
      occupation:
        'urn:li:fs_position:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,230932600)',
      members: [
        {
          member: {
            firstName: 'Miguel Angel',
            lastName: 'Durán García',
            dashEntityUrn:
              'urn:li:fsd_profile:ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE',
            occupation:
              'Software Engineer and Web Developer. Awarded as GitHub Star, Microsoft MVP, and Google Developer Expert.',
            objectUrn: 'urn:li:member:38364063',
            entityUrn:
              'urn:li:fs_miniProfile:ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE',
            backgroundImage: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 800,
                    fileIdentifyingUrlPathSegment:
                      '200_800/profile-displaybackgroundimage-shrink_200_800/0/1705658623328?e=1734566400&v=beta&t=Kl7BZBZKoRYfXP8Czmhb2KMAopgbuFZLoSZpKs_6imI',
                    expiresAt: 1734566400000,
                    height: 199,
                  },
                  {
                    width: 1400,
                    fileIdentifyingUrlPathSegment:
                      '350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1705658623328?e=1734566400&v=beta&t=_PnZLYQsYcG2lwdsVSHCfXrWrKCcJXvacPWxp4_3sRQ',
                    expiresAt: 1734566400000,
                    height: 349,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/D4D16AQH0oWjGlgAj5A/profile-displaybackgroundimage-shrink_',
              },
            },
            publicIdentifier: 'midudev',
            picture: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 100,
                    fileIdentifyingUrlPathSegment:
                      '100_100/profile-displayphoto-shrink_100_100/0/1723639491706?e=1734566400&v=beta&t=1CPxMGSx7txogjotUOvW74eXB7Fzx0gAPMnc2OYOft4',
                    expiresAt: 1734566400000,
                    height: 100,
                  },
                  {
                    width: 200,
                    fileIdentifyingUrlPathSegment:
                      '200_200/profile-displayphoto-shrink_200_200/0/1723639491706?e=1734566400&v=beta&t=bB2cJ0rzMu75ycRmLsuLvnTCoGAzsJvdkI8ZBXFGzN4',
                    expiresAt: 1734566400000,
                    height: 200,
                  },
                  {
                    width: 400,
                    fileIdentifyingUrlPathSegment:
                      '400_400/profile-displayphoto-shrink_400_400/0/1723639491706?e=1734566400&v=beta&t=EVSvZcB95zW1Xj9PHkPyUWbnmeN3OI5AkZ7MoYB1-PU',
                    expiresAt: 1734566400000,
                    height: 400,
                  },
                  {
                    width: 800,
                    fileIdentifyingUrlPathSegment:
                      '800_800/profile-displayphoto-shrink_800_800/0/1723639491740?e=1734566400&v=beta&t=8AONwDo9HclQDp8PyNmma8whd9FAv7GvOIbbDMOu4Sc',
                    expiresAt: 1734566400000,
                    height: 800,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/D4D03AQHigBNGVqRnOA/profile-displayphoto-shrink_',
              },
            },
            trackingId: 'SVfhaGTMQymShms6Bo2uaA==',
          },
          entityUrn:
            'urn:li:fs_contributor:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,1937657898,1)',
          profileUrn:
            'urn:li:fs_miniProfile:ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE',
        },
      ],
      timePeriod: {
        endDate: { month: 10, year: 2014 },
        startDate: { month: 10, year: 2014 },
      },
      description:
        'Web del colorista Xavi Santolaya. Xavi tiene más de 12 años de experiencia creando y mejorando comerciales y vídeos musicales, entre otras piezas visuales, para sus clientes. Necesitaba una web rápida, sencilla y limpia para mostrar su trabajo.',
      title: 'Web Xavi Santolaya',
      url: 'http://xavisantolaya.com/',
    },
    {
      occupation:
        'urn:li:fs_position:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,230932600)',
      members: [
        {
          member: {
            firstName: 'Miguel Angel',
            lastName: 'Durán García',
            dashEntityUrn:
              'urn:li:fsd_profile:ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE',
            occupation:
              'Software Engineer and Web Developer. Awarded as GitHub Star, Microsoft MVP, and Google Developer Expert.',
            objectUrn: 'urn:li:member:38364063',
            entityUrn:
              'urn:li:fs_miniProfile:ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE',
            backgroundImage: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 800,
                    fileIdentifyingUrlPathSegment:
                      '200_800/profile-displaybackgroundimage-shrink_200_800/0/1705658623328?e=1734566400&v=beta&t=Kl7BZBZKoRYfXP8Czmhb2KMAopgbuFZLoSZpKs_6imI',
                    expiresAt: 1734566400000,
                    height: 199,
                  },
                  {
                    width: 1400,
                    fileIdentifyingUrlPathSegment:
                      '350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1705658623328?e=1734566400&v=beta&t=_PnZLYQsYcG2lwdsVSHCfXrWrKCcJXvacPWxp4_3sRQ',
                    expiresAt: 1734566400000,
                    height: 349,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/D4D16AQH0oWjGlgAj5A/profile-displaybackgroundimage-shrink_',
              },
            },
            publicIdentifier: 'midudev',
            picture: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 100,
                    fileIdentifyingUrlPathSegment:
                      '100_100/profile-displayphoto-shrink_100_100/0/1723639491706?e=1734566400&v=beta&t=1CPxMGSx7txogjotUOvW74eXB7Fzx0gAPMnc2OYOft4',
                    expiresAt: 1734566400000,
                    height: 100,
                  },
                  {
                    width: 200,
                    fileIdentifyingUrlPathSegment:
                      '200_200/profile-displayphoto-shrink_200_200/0/1723639491706?e=1734566400&v=beta&t=bB2cJ0rzMu75ycRmLsuLvnTCoGAzsJvdkI8ZBXFGzN4',
                    expiresAt: 1734566400000,
                    height: 200,
                  },
                  {
                    width: 400,
                    fileIdentifyingUrlPathSegment:
                      '400_400/profile-displayphoto-shrink_400_400/0/1723639491706?e=1734566400&v=beta&t=EVSvZcB95zW1Xj9PHkPyUWbnmeN3OI5AkZ7MoYB1-PU',
                    expiresAt: 1734566400000,
                    height: 400,
                  },
                  {
                    width: 800,
                    fileIdentifyingUrlPathSegment:
                      '800_800/profile-displayphoto-shrink_800_800/0/1723639491740?e=1734566400&v=beta&t=8AONwDo9HclQDp8PyNmma8whd9FAv7GvOIbbDMOu4Sc',
                    expiresAt: 1734566400000,
                    height: 800,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/D4D03AQHigBNGVqRnOA/profile-displayphoto-shrink_',
              },
            },
            trackingId: 'SVfhaGTMQymShms6Bo2uaA==',
          },
          entityUrn:
            'urn:li:fs_contributor:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,141,142)',
          profileUrn:
            'urn:li:fs_miniProfile:ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE',
        },
        {
          member: {
            firstName: 'Carlos',
            lastName: 'Fdz. Rovira',
            dashEntityUrn:
              'urn:li:fsd_profile:ACoAAALA6yAByIvKGeiMz1Prl6ufE_G8uYJLUq8',
            occupation: 'Arquitecto',
            objectUrn: 'urn:li:member:46197536',
            entityUrn:
              'urn:li:fs_miniProfile:ACoAAALA6yAByIvKGeiMz1Prl6ufE_G8uYJLUq8',
            backgroundImage: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 800,
                    fileIdentifyingUrlPathSegment:
                      '200_800/profile-displaybackgroundimage-shrink_200_800/0/1516505154947?e=1734566400&v=beta&t=5dB4hzqsHhtp_qFE69KwwfGTBYQeHiUEJEXndMG1PHo',
                    expiresAt: 1734566400000,
                    height: 200,
                  },
                  {
                    width: 1400,
                    fileIdentifyingUrlPathSegment:
                      '350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1516505154931?e=1734566400&v=beta&t=IF7KBb6ofE4xBbDggxtH5MIkw4CV19xs0vX36Yzmvx8',
                    expiresAt: 1734566400000,
                    height: 350,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/C4D16AQFHo4noJJgFyw/profile-displaybackgroundimage-shrink_',
              },
            },
            publicIdentifier: 'carlosfdzrovira',
            picture: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 100,
                    fileIdentifyingUrlPathSegment:
                      '100_100/profile-displayphoto-shrink_100_100/0/1666010552435?e=1734566400&v=beta&t=wJcBz01-9ECg3JnQUqCnjl0enYrFuiOq0pqnIj5Vhb0',
                    expiresAt: 1734566400000,
                    height: 100,
                  },
                  {
                    width: 200,
                    fileIdentifyingUrlPathSegment:
                      '200_200/profile-displayphoto-shrink_200_200/0/1666010552436?e=1734566400&v=beta&t=ipI7tdfmKxmcfvA1dWS0bRzSB1f3pnyaG2TRgL8CYdw',
                    expiresAt: 1734566400000,
                    height: 200,
                  },
                  {
                    width: 400,
                    fileIdentifyingUrlPathSegment:
                      '400_400/profile-displayphoto-shrink_400_400/0/1666010552436?e=1734566400&v=beta&t=pM_AWrQnxPdwbTnlvFCcUqdjYTtMTC7y7xq7FlnCflY',
                    expiresAt: 1734566400000,
                    height: 400,
                  },
                  {
                    width: 800,
                    fileIdentifyingUrlPathSegment:
                      '800_800/profile-displayphoto-shrink_800_800/0/1666010552436?e=1734566400&v=beta&t=GxTPo1bnIgwcoIflnyXd_nrxfpTVURaXcP9XWX408is',
                    expiresAt: 1734566400000,
                    height: 800,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/D4D03AQEtaJ3k-iejEQ/profile-displayphoto-shrink_',
              },
            },
            trackingId: '6/8cHvQXRg2mhSLBmKitOw==',
          },
          entityUrn:
            'urn:li:fs_contributor:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,141,144)',
          profileUrn:
            'urn:li:fs_miniProfile:ACoAAALA6yAByIvKGeiMz1Prl6ufE_G8uYJLUq8',
        },
        {
          member: {
            firstName: 'Alicia',
            lastName: 'Durán',
            dashEntityUrn:
              'urn:li:fsd_profile:ACoAAAXjS28BQD1K4UIdktuAjYebe6HFpNXpOJY',
            occupation: 'Socio fundador en Uikú Coworking el Prat',
            objectUrn: 'urn:li:member:98782063',
            entityUrn:
              'urn:li:fs_miniProfile:ACoAAAXjS28BQD1K4UIdktuAjYebe6HFpNXpOJY',
            backgroundImage: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 800,
                    fileIdentifyingUrlPathSegment:
                      '200_800/profile-displaybackgroundimage-shrink_200_800/0/1519509690853?e=1734566400&v=beta&t=2PxJBSU-fSYRX4rRQuo1a_8T9Tgwfb36u3sSFmR_Nlg',
                    expiresAt: 1734566400000,
                    height: 200,
                  },
                  {
                    width: 1392,
                    fileIdentifyingUrlPathSegment:
                      '350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1519509690775?e=1734566400&v=beta&t=c3QjAwItIDELoBylVHJNg4dFe1oHUiO6bT8y8uY8kF4',
                    expiresAt: 1734566400000,
                    height: 348,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/C4D16AQGtb-Wsht53Cg/profile-displaybackgroundimage-shrink_',
              },
            },
            publicIdentifier: 'aliduran',
            picture: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 100,
                    fileIdentifyingUrlPathSegment:
                      '100_100/profile-displayphoto-shrink_100_100/0/1517536535268?e=1734566400&v=beta&t=Sf8ttDgi5J8HZOO1F6xtr4ns25rc8NqSQB-4KB2cLQY',
                    expiresAt: 1734566400000,
                    height: 100,
                  },
                  {
                    width: 200,
                    fileIdentifyingUrlPathSegment:
                      '200_200/profile-displayphoto-shrink_200_200/0/1517536535322?e=1734566400&v=beta&t=AFRxNisZa5YhMGFKRcKOFoJb5ZKZza8qIn63q50Txf4',
                    expiresAt: 1734566400000,
                    height: 200,
                  },
                  {
                    width: 216,
                    fileIdentifyingUrlPathSegment:
                      '400_400/profile-displayphoto-shrink_400_400/0/1517536535327?e=1734566400&v=beta&t=SDUcMvDDBuBvt6XG7pUi_zPp7miPI1KfUpcfkreoHVQ',
                    expiresAt: 1734566400000,
                    height: 216,
                  },
                  {
                    width: 216,
                    fileIdentifyingUrlPathSegment:
                      '800_800/profile-displayphoto-shrink_800_800/0/1517536535323?e=1734566400&v=beta&t=z7OneXbnDQ2FgnSKgHo6DnWOy_EIWau7nQg2sInWfp4',
                    expiresAt: 1734566400000,
                    height: 216,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/C4D03AQEh4Orgw6aBuw/profile-displayphoto-shrink_',
              },
            },
            trackingId: 'V4Vhjx/XSBKEcQDRKWs/9A==',
          },
          entityUrn:
            'urn:li:fs_contributor:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,141,145)',
          profileUrn:
            'urn:li:fs_miniProfile:ACoAAAXjS28BQD1K4UIdktuAjYebe6HFpNXpOJY',
        },
      ],
      timePeriod: {
        endDate: { month: 4, year: 2013 },
        startDate: { month: 4, year: 2013 },
      },
      description:
        'Creación de la web del estudio multidisciplinar AFK Estudio.',
      title: 'Web AFK Estudio',
      url: 'http://afkestudio.es',
    },
    {
      occupation:
        'urn:li:fs_position:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,230932600)',
      members: [
        {
          member: {
            firstName: 'Miguel Angel',
            lastName: 'Durán García',
            dashEntityUrn:
              'urn:li:fsd_profile:ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE',
            occupation:
              'Software Engineer and Web Developer. Awarded as GitHub Star, Microsoft MVP, and Google Developer Expert.',
            objectUrn: 'urn:li:member:38364063',
            entityUrn:
              'urn:li:fs_miniProfile:ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE',
            backgroundImage: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 800,
                    fileIdentifyingUrlPathSegment:
                      '200_800/profile-displaybackgroundimage-shrink_200_800/0/1705658623328?e=1734566400&v=beta&t=Kl7BZBZKoRYfXP8Czmhb2KMAopgbuFZLoSZpKs_6imI',
                    expiresAt: 1734566400000,
                    height: 199,
                  },
                  {
                    width: 1400,
                    fileIdentifyingUrlPathSegment:
                      '350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1705658623328?e=1734566400&v=beta&t=_PnZLYQsYcG2lwdsVSHCfXrWrKCcJXvacPWxp4_3sRQ',
                    expiresAt: 1734566400000,
                    height: 349,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/D4D16AQH0oWjGlgAj5A/profile-displaybackgroundimage-shrink_',
              },
            },
            publicIdentifier: 'midudev',
            picture: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 100,
                    fileIdentifyingUrlPathSegment:
                      '100_100/profile-displayphoto-shrink_100_100/0/1723639491706?e=1734566400&v=beta&t=1CPxMGSx7txogjotUOvW74eXB7Fzx0gAPMnc2OYOft4',
                    expiresAt: 1734566400000,
                    height: 100,
                  },
                  {
                    width: 200,
                    fileIdentifyingUrlPathSegment:
                      '200_200/profile-displayphoto-shrink_200_200/0/1723639491706?e=1734566400&v=beta&t=bB2cJ0rzMu75ycRmLsuLvnTCoGAzsJvdkI8ZBXFGzN4',
                    expiresAt: 1734566400000,
                    height: 200,
                  },
                  {
                    width: 400,
                    fileIdentifyingUrlPathSegment:
                      '400_400/profile-displayphoto-shrink_400_400/0/1723639491706?e=1734566400&v=beta&t=EVSvZcB95zW1Xj9PHkPyUWbnmeN3OI5AkZ7MoYB1-PU',
                    expiresAt: 1734566400000,
                    height: 400,
                  },
                  {
                    width: 800,
                    fileIdentifyingUrlPathSegment:
                      '800_800/profile-displayphoto-shrink_800_800/0/1723639491740?e=1734566400&v=beta&t=8AONwDo9HclQDp8PyNmma8whd9FAv7GvOIbbDMOu4Sc',
                    expiresAt: 1734566400000,
                    height: 800,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/D4D03AQHigBNGVqRnOA/profile-displayphoto-shrink_',
              },
            },
            trackingId: 'SVfhaGTMQymShms6Bo2uaA==',
          },
          entityUrn:
            'urn:li:fs_contributor:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,146,147)',
          profileUrn:
            'urn:li:fs_miniProfile:ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE',
        },
        {
          member: {
            firstName: 'Anna',
            lastName: 'Escurriola Peña',
            dashEntityUrn:
              'urn:li:fsd_profile:ACoAAAPpV6EBC0fUK7f6fBU27fBPFrtFBHnebnw',
            occupation: 'Art Director & Graphic Designer · Filmmaker',
            objectUrn: 'urn:li:member:65623969',
            entityUrn:
              'urn:li:fs_miniProfile:ACoAAAPpV6EBC0fUK7f6fBU27fBPFrtFBHnebnw',
            backgroundImage: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 528,
                    fileIdentifyingUrlPathSegment:
                      '200_800/profile-displaybackgroundimage-shrink_200_800/0/1647630806872?e=1734566400&v=beta&t=OW4_ZKPiahR6SdXSHzc9ZxFiY6KVBXXVRceLsByoqzs',
                    expiresAt: 1734566400000,
                    height: 132,
                  },
                  {
                    width: 528,
                    fileIdentifyingUrlPathSegment:
                      '350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1647630806872?e=1734566400&v=beta&t=ajQrGWVTKhzfmSOHZSQXxWA3RDKfUEECMLnUF0CU1xA',
                    expiresAt: 1734566400000,
                    height: 132,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/C4E16AQFVn9TrM6mWmA/profile-displaybackgroundimage-shrink_',
              },
            },
            publicIdentifier: 'annaescurriola',
            picture: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 100,
                    fileIdentifyingUrlPathSegment:
                      '100_100/profile-displayphoto-shrink_100_100/0/1618221243613?e=1734566400&v=beta&t=0-CBqO4yFJz66ghGVBskMF4d4eGr_2WdJXAXoy7F1qY',
                    expiresAt: 1734566400000,
                    height: 100,
                  },
                  {
                    width: 200,
                    fileIdentifyingUrlPathSegment:
                      '200_200/profile-displayphoto-shrink_200_200/0/1618221243613?e=1734566400&v=beta&t=NS1VeBGpKXOO-tBnUCpqxRX0GXh0t7OoHf1s6YJGMZE',
                    expiresAt: 1734566400000,
                    height: 200,
                  },
                  {
                    width: 400,
                    fileIdentifyingUrlPathSegment:
                      '400_400/profile-displayphoto-shrink_400_400/0/1618221243613?e=1734566400&v=beta&t=5xPcq_xaMhI_lgxnQ0Q_lZA7cFeF_SnVg5Yt9qxg8xE',
                    expiresAt: 1734566400000,
                    height: 400,
                  },
                  {
                    width: 800,
                    fileIdentifyingUrlPathSegment:
                      '800_800/profile-displayphoto-shrink_800_800/0/1618221243613?e=1734566400&v=beta&t=zPT4_TF5trx98kFZ3v5X8EOmwWQeTWEY75mZDYzrpnY',
                    expiresAt: 1734566400000,
                    height: 800,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/C4E03AQHv9inUiMfnIQ/profile-displayphoto-shrink_',
              },
            },
            trackingId: 'n6kMTcVyTk6uY9b7jqcjuA==',
          },
          entityUrn:
            'urn:li:fs_contributor:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,146,148)',
          profileUrn:
            'urn:li:fs_miniProfile:ACoAAAPpV6EBC0fUK7f6fBU27fBPFrtFBHnebnw',
        },
      ],
      timePeriod: {
        endDate: { month: 10, year: 2012 },
        startDate: { month: 10, year: 2012 },
      },
      description: 'Creación de la web de la pianista catalana Clara Peya.',
      title: 'Web Clara Peya',
      url: 'http://clarapeya.com',
    },
    {
      occupation:
        'urn:li:fs_position:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,177317916)',
      members: [
        {
          member: {
            firstName: 'Miguel Angel',
            lastName: 'Durán García',
            dashEntityUrn:
              'urn:li:fsd_profile:ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE',
            occupation:
              'Software Engineer and Web Developer. Awarded as GitHub Star, Microsoft MVP, and Google Developer Expert.',
            objectUrn: 'urn:li:member:38364063',
            entityUrn:
              'urn:li:fs_miniProfile:ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE',
            backgroundImage: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 800,
                    fileIdentifyingUrlPathSegment:
                      '200_800/profile-displaybackgroundimage-shrink_200_800/0/1705658623328?e=1734566400&v=beta&t=Kl7BZBZKoRYfXP8Czmhb2KMAopgbuFZLoSZpKs_6imI',
                    expiresAt: 1734566400000,
                    height: 199,
                  },
                  {
                    width: 1400,
                    fileIdentifyingUrlPathSegment:
                      '350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1705658623328?e=1734566400&v=beta&t=_PnZLYQsYcG2lwdsVSHCfXrWrKCcJXvacPWxp4_3sRQ',
                    expiresAt: 1734566400000,
                    height: 349,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/D4D16AQH0oWjGlgAj5A/profile-displaybackgroundimage-shrink_',
              },
            },
            publicIdentifier: 'midudev',
            picture: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 100,
                    fileIdentifyingUrlPathSegment:
                      '100_100/profile-displayphoto-shrink_100_100/0/1723639491706?e=1734566400&v=beta&t=1CPxMGSx7txogjotUOvW74eXB7Fzx0gAPMnc2OYOft4',
                    expiresAt: 1734566400000,
                    height: 100,
                  },
                  {
                    width: 200,
                    fileIdentifyingUrlPathSegment:
                      '200_200/profile-displayphoto-shrink_200_200/0/1723639491706?e=1734566400&v=beta&t=bB2cJ0rzMu75ycRmLsuLvnTCoGAzsJvdkI8ZBXFGzN4',
                    expiresAt: 1734566400000,
                    height: 200,
                  },
                  {
                    width: 400,
                    fileIdentifyingUrlPathSegment:
                      '400_400/profile-displayphoto-shrink_400_400/0/1723639491706?e=1734566400&v=beta&t=EVSvZcB95zW1Xj9PHkPyUWbnmeN3OI5AkZ7MoYB1-PU',
                    expiresAt: 1734566400000,
                    height: 400,
                  },
                  {
                    width: 800,
                    fileIdentifyingUrlPathSegment:
                      '800_800/profile-displayphoto-shrink_800_800/0/1723639491740?e=1734566400&v=beta&t=8AONwDo9HclQDp8PyNmma8whd9FAv7GvOIbbDMOu4Sc',
                    expiresAt: 1734566400000,
                    height: 800,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/D4D03AQHigBNGVqRnOA/profile-displayphoto-shrink_',
              },
            },
            trackingId: 'SVfhaGTMQymShms6Bo2uaA==',
          },
          entityUrn:
            'urn:li:fs_contributor:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,122,123)',
          profileUrn:
            'urn:li:fs_miniProfile:ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE',
        },
        {
          member: {
            firstName: 'Jacobo',
            lastName: 'Toll-Messia',
            dashEntityUrn:
              'urn:li:fsd_profile:ACoAAAAhZ4gBRPySgikj6h5D9Qo6OhxSTKDGpag',
            occupation: 'Founder & CEO Nahmii AS',
            objectUrn: 'urn:li:member:2189192',
            entityUrn:
              'urn:li:fs_miniProfile:ACoAAAAhZ4gBRPySgikj6h5D9Qo6OhxSTKDGpag',
            backgroundImage: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 800,
                    fileIdentifyingUrlPathSegment:
                      '200_800/profile-displaybackgroundimage-shrink_200_800/0/1620402512463?e=1734566400&v=beta&t=tGG9SEdmIodNqyQtsUOiPS-4nl_z2sHVBIYrr_5uXW0',
                    expiresAt: 1734566400000,
                    height: 200,
                  },
                  {
                    width: 1400,
                    fileIdentifyingUrlPathSegment:
                      '350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1620402512463?e=1734566400&v=beta&t=8GToRWGTL1WxJMz7GCD1fPlc_pAX_LoxUs2MiAvEqAg',
                    expiresAt: 1734566400000,
                    height: 350,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/C4D16AQEk3x7ObA-8ZQ/profile-displaybackgroundimage-shrink_',
              },
            },
            publicIdentifier: 'jacobotoll',
            picture: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 100,
                    fileIdentifyingUrlPathSegment:
                      '100_100/profile-displayphoto-shrink_100_100/0/1520804598398?e=1734566400&v=beta&t=rnlPlDa3w_2Q7SavIRmxtRicyA9fnMZBCQP_YI4RDWY',
                    expiresAt: 1734566400000,
                    height: 100,
                  },
                  {
                    width: 200,
                    fileIdentifyingUrlPathSegment:
                      '200_200/profile-displayphoto-shrink_200_200/0/1520804598611?e=1734566400&v=beta&t=F_vEYAqCHckJLBiNlLduf1sV66uavgQQWwYnacC09us',
                    expiresAt: 1734566400000,
                    height: 200,
                  },
                  {
                    width: 400,
                    fileIdentifyingUrlPathSegment:
                      '400_400/profile-displayphoto-shrink_400_400/0/1520804598705?e=1734566400&v=beta&t=itZoEECSenWBgc6gETX-534GGQ0MIatcSbqWHkoKKeg',
                    expiresAt: 1734566400000,
                    height: 400,
                  },
                  {
                    width: 400,
                    fileIdentifyingUrlPathSegment:
                      '800_800/profile-displayphoto-shrink_800_800/0/1520804598355?e=1734566400&v=beta&t=9lpOQFO0nd7q6YPFUKoILuxhoXC9yqhV6UsfQaRTn8Q',
                    expiresAt: 1734566400000,
                    height: 400,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/C4E03AQGe-QiFe88ebA/profile-displayphoto-shrink_',
              },
            },
            trackingId: 'IiObYg+4TVWns8TO2bPIbg==',
          },
          entityUrn:
            'urn:li:fs_contributor:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,122,124)',
          profileUrn:
            'urn:li:fs_miniProfile:ACoAAAAhZ4gBRPySgikj6h5D9Qo6OhxSTKDGpag',
        },
        {
          member: {
            firstName: 'Robert',
            lastName: 'Hopland',
            dashEntityUrn:
              'urn:li:fsd_profile:ACoAAAC2KnUB5Kh1U2m7RtTM9aIHh_WqKvVLDN0',
            occupation: 'System Developer at LINK Mobility Group',
            objectUrn: 'urn:li:member:11938421',
            entityUrn:
              'urn:li:fs_miniProfile:ACoAAAC2KnUB5Kh1U2m7RtTM9aIHh_WqKvVLDN0',
            publicIdentifier: 'robert-hopland-985bb83',
            picture: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 100,
                    fileIdentifyingUrlPathSegment:
                      '100_100/profile-displayphoto-shrink_100_100/0/1517665168622?e=1734566400&v=beta&t=YL-fOrnlV1g-iW-q6Eq4lng-LFpaHA8hr0-pgD-jpXc',
                    expiresAt: 1734566400000,
                    height: 100,
                  },
                  {
                    width: 200,
                    fileIdentifyingUrlPathSegment:
                      '200_200/profile-displayphoto-shrink_200_200/0/1517665168766?e=1734566400&v=beta&t=AEH5DadoY1AeeDTN75MuvvpYolCuz-PK2UhntCh9xDo',
                    expiresAt: 1734566400000,
                    height: 200,
                  },
                  {
                    width: 300,
                    fileIdentifyingUrlPathSegment:
                      '400_400/profile-displayphoto-shrink_400_400/0/1517665168288?e=1734566400&v=beta&t=aoR8E8Nu02UpMe-pAm-eBdDLqA9QEL46h_OxW1zT7T0',
                    expiresAt: 1734566400000,
                    height: 300,
                  },
                  {
                    width: 300,
                    fileIdentifyingUrlPathSegment:
                      '800_800/profile-displayphoto-shrink_800_800/0/1517665168364?e=1734566400&v=beta&t=NFrMpVuf497e5zhhzzrww9M9obnMnmq1ZLc7FiV7TuE',
                    expiresAt: 1734566400000,
                    height: 300,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/C4E03AQET1OlHPSfK6w/profile-displayphoto-shrink_',
              },
            },
            trackingId: 'ZrJdP1yRS0yeLAMunTh6MA==',
          },
          entityUrn:
            'urn:li:fs_contributor:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,122,125)',
          profileUrn:
            'urn:li:fs_miniProfile:ACoAAAC2KnUB5Kh1U2m7RtTM9aIHh_WqKvVLDN0',
        },
        {
          member: {
            firstName: 'Morten',
            lastName: 'Fjeldstad',
            dashEntityUrn:
              'urn:li:fsd_profile:ACoAAAA_0fwBVutf86nFvu14IBMTpD041MGv49A',
            occupation: 'Full Stack Software Engineer at Schlumberger',
            objectUrn: 'urn:li:member:4182524',
            entityUrn:
              'urn:li:fs_miniProfile:ACoAAAA_0fwBVutf86nFvu14IBMTpD041MGv49A',
            backgroundImage: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 800,
                    fileIdentifyingUrlPathSegment:
                      '200_800/profile-displaybackgroundimage-shrink_200_800/0/1516275173399?e=1734566400&v=beta&t=93Kca6Y7DSVEdog7IaIeTs1mKFZAlH5xtFeYzUWX5UM',
                    expiresAt: 1734566400000,
                    height: 200,
                  },
                  {
                    width: 1400,
                    fileIdentifyingUrlPathSegment:
                      '350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1516275173407?e=1734566400&v=beta&t=sMf4nczkMzdJ_1WRos97RDJ6IIIBeQjNicofQ8BvATI',
                    expiresAt: 1734566400000,
                    height: 350,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/C5116AQFGEDKItm6Z0Q/profile-displaybackgroundimage-shrink_',
              },
            },
            publicIdentifier: 'mortenfjeldstad',
            picture: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 100,
                    fileIdentifyingUrlPathSegment:
                      '100_100/profile-displayphoto-shrink_100_100/0/1516275172973?e=1734566400&v=beta&t=cRbimzfiNRf07ziD1wg7UpV0yXo4nT3YTwEk_Zw0lyU',
                    expiresAt: 1734566400000,
                    height: 100,
                  },
                  {
                    width: 200,
                    fileIdentifyingUrlPathSegment:
                      '200_200/profile-displayphoto-shrink_200_200/0/1516275172726?e=1734566400&v=beta&t=jenKCin_wjqu6U0JTydi8nmJyhRdzblTrZG2KNfA4kU',
                    expiresAt: 1734566400000,
                    height: 200,
                  },
                  {
                    width: 400,
                    fileIdentifyingUrlPathSegment:
                      '400_400/profile-displayphoto-shrink_400_400/0/1516275172680?e=1734566400&v=beta&t=IHTQQAsaq3XNsbAkaQ0Wt4GcUwxrwqhG8uKLB9LkQs0',
                    expiresAt: 1734566400000,
                    height: 400,
                  },
                  {
                    width: 450,
                    fileIdentifyingUrlPathSegment:
                      '800_800/profile-displayphoto-shrink_800_800/0/1516275172715?e=1734566400&v=beta&t=Bjd0ckw1LluV6a0GtXZF5oEPe_3Hj3CQD1bIFFmdu7o',
                    expiresAt: 1734566400000,
                    height: 450,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/C5103AQGkMfnI1yvHNw/profile-displayphoto-shrink_',
              },
            },
            trackingId: 'n9CDTn0FREG7BWNLjy+aSA==',
          },
          entityUrn:
            'urn:li:fs_contributor:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,122,126)',
          profileUrn:
            'urn:li:fs_miniProfile:ACoAAAA_0fwBVutf86nFvu14IBMTpD041MGv49A',
        },
        {
          member: {
            firstName: 'Jon Stefan',
            lastName: 'Haukedal Fraczak',
            dashEntityUrn:
              'urn:li:fsd_profile:ACoAAABRUcEB1QPojJ49lFmQWjxQvv7-q6VXZ4E',
            occupation: 'Product Manager @DNB',
            objectUrn: 'urn:li:member:5329345',
            entityUrn:
              'urn:li:fs_miniProfile:ACoAAABRUcEB1QPojJ49lFmQWjxQvv7-q6VXZ4E',
            backgroundImage: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 800,
                    fileIdentifyingUrlPathSegment:
                      '200_800/profile-displaybackgroundimage-shrink_200_800/0/1516342068520?e=1734566400&v=beta&t=0x-mikvUy20ttXhZTBTIkbOnPU5Nh9dp0avCu4Z24mE',
                    expiresAt: 1734566400000,
                    height: 200,
                  },
                  {
                    width: 914,
                    fileIdentifyingUrlPathSegment:
                      '350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1516342068847?e=1734566400&v=beta&t=cdXypjpqFXs48jUl8NF8KAsPy_nOK14HrBW9Ymx86ME',
                    expiresAt: 1734566400000,
                    height: 228,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/C5116AQGsct8uoWXFng/profile-displaybackgroundimage-shrink_',
              },
            },
            publicIdentifier: 'jonstefan',
            trackingId: 'pA19qP36Qiyub8tq2bd3cg==',
          },
          entityUrn:
            'urn:li:fs_contributor:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,122,127)',
          profileUrn:
            'urn:li:fs_miniProfile:ACoAAABRUcEB1QPojJ49lFmQWjxQvv7-q6VXZ4E',
        },
        {
          member: {
            firstName: 'Jens Ivar',
            lastName: 'Jørdre',
            dashEntityUrn:
              'urn:li:fsd_profile:ACoAAAGJXDUBiT48GQg8imwfFLzG_9EV0ABk_sc',
            occupation: 'Senior Consultant at Webstep',
            objectUrn: 'urn:li:member:25779253',
            entityUrn:
              'urn:li:fs_miniProfile:ACoAAAGJXDUBiT48GQg8imwfFLzG_9EV0ABk_sc',
            backgroundImage: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 800,
                    fileIdentifyingUrlPathSegment:
                      '200_800/profile-displaybackgroundimage-shrink_200_800/0/1659897745855?e=1734566400&v=beta&t=EdxyEO4kWDk3y85DyTuEJq5VfZAQaomfc1jAujoWC6I',
                    expiresAt: 1734566400000,
                    height: 200,
                  },
                  {
                    width: 1400,
                    fileIdentifyingUrlPathSegment:
                      '350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1659897745855?e=1734566400&v=beta&t=4CX_ObAOQygU_Rj292y26eOJX3nkypg06X582cwonxI',
                    expiresAt: 1734566400000,
                    height: 350,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/C4D16AQHb-YZn8M7oIQ/profile-displaybackgroundimage-shrink_',
              },
            },
            publicIdentifier: 'jijordre',
            picture: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 100,
                    fileIdentifyingUrlPathSegment:
                      '100_100/profile-displayphoto-shrink_100_100/0/1517732186142?e=1734566400&v=beta&t=KLp3cfeuSadx1C8_p3Vt8gAuRcqS-ub4prDOXXQ9TCU',
                    expiresAt: 1734566400000,
                    height: 100,
                  },
                  {
                    width: 200,
                    fileIdentifyingUrlPathSegment:
                      '200_200/profile-displayphoto-shrink_200_200/0/1517732186143?e=1734566400&v=beta&t=CJu_8CY6lKWG8yhbjwXUJ9IIxwyvkp53S-NFiq2ictM',
                    expiresAt: 1734566400000,
                    height: 200,
                  },
                  {
                    width: 400,
                    fileIdentifyingUrlPathSegment:
                      '400_400/profile-displayphoto-shrink_400_400/0/1517732186438?e=1734566400&v=beta&t=RhkSshYt2z7prMSFRtNCVWMe_cAM1Ci9pFm0CXf_q6E',
                    expiresAt: 1734566400000,
                    height: 400,
                  },
                  {
                    width: 500,
                    fileIdentifyingUrlPathSegment:
                      '800_800/profile-displayphoto-shrink_800_800/0/1517732186119?e=1734566400&v=beta&t=irxFMHupEYvj3koqBvTwZF1Wc3GsvMj1GRL2vIVrZPM',
                    expiresAt: 1734566400000,
                    height: 500,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/C4E03AQE-_1U7oJxpTA/profile-displayphoto-shrink_',
              },
            },
            trackingId: 'k0+7dbiARjOTfaqRVy0Qxg==',
          },
          entityUrn:
            'urn:li:fs_contributor:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,122,128)',
          profileUrn:
            'urn:li:fs_miniProfile:ACoAAAGJXDUBiT48GQg8imwfFLzG_9EV0ABk_sc',
        },
        {
          member: {
            firstName: 'Israel',
            lastName: 'Matamalas',
            dashEntityUrn:
              'urn:li:fsd_profile:ACoAAAPLeuYBnSdAlLTiwp1qATOL4MguQAZ8L4I',
            occupation: 'Animador, ilustrador y diseñador',
            objectUrn: 'urn:li:member:63666918',
            entityUrn:
              'urn:li:fs_miniProfile:ACoAAAPLeuYBnSdAlLTiwp1qATOL4MguQAZ8L4I',
            backgroundImage: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 800,
                    fileIdentifyingUrlPathSegment:
                      '200_800/profile-displaybackgroundimage-shrink_200_800/0/1516808032732?e=1734566400&v=beta&t=-hTFI3Eg2TiUZyqIuSb6I27Rf63U7wIZnNcl0h3fJa0',
                    expiresAt: 1734566400000,
                    height: 200,
                  },
                  {
                    width: 1400,
                    fileIdentifyingUrlPathSegment:
                      '350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1516808031342?e=1734566400&v=beta&t=KlIbZVm3aiEy7uqG3UzZcltBjtcApUdGKEbnnO1BZg0',
                    expiresAt: 1734566400000,
                    height: 350,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/C4D16AQHeEbRE4RNYjA/profile-displaybackgroundimage-shrink_',
              },
            },
            publicIdentifier: 'israelmatamalas',
            picture: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 100,
                    fileIdentifyingUrlPathSegment:
                      '100_100/profile-displayphoto-shrink_100_100/0/1516808031222?e=1734566400&v=beta&t=QiOQK1u7FKpoXeVLTIzJuLtqHPLI7Xf6sCxrC72v5ec',
                    expiresAt: 1734566400000,
                    height: 100,
                  },
                  {
                    width: 200,
                    fileIdentifyingUrlPathSegment:
                      '200_200/profile-displayphoto-shrink_200_200/0/1516808030856?e=1734566400&v=beta&t=6S1IQCnSWEr9SscFxTVlU2y_L3jbe6I7kkrh6xjHaHs',
                    expiresAt: 1734566400000,
                    height: 200,
                  },
                  {
                    width: 393,
                    fileIdentifyingUrlPathSegment:
                      '400_400/profile-displayphoto-shrink_400_400/0/1516808031119?e=1734566400&v=beta&t=Je3XmOzTfHaxPVbx5Mt0lilSZ2aBPeW1Hzpdt7XtCuc',
                    expiresAt: 1734566400000,
                    height: 393,
                  },
                  {
                    width: 393,
                    fileIdentifyingUrlPathSegment:
                      '800_800/profile-displayphoto-shrink_800_800/0/1516808030827?e=1734566400&v=beta&t=leFlZGkpmW9em9OeGzdPcQBmeWINXHEi19tamUHCJsk',
                    expiresAt: 1734566400000,
                    height: 393,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/C4D03AQFLjTfVTncZLg/profile-displayphoto-shrink_',
              },
            },
            trackingId: 'SBXTphMvQx+p3Mmtlq4UoA==',
          },
          entityUrn:
            'urn:li:fs_contributor:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,122,129)',
          profileUrn:
            'urn:li:fs_miniProfile:ACoAAAPLeuYBnSdAlLTiwp1qATOL4MguQAZ8L4I',
        },
        {
          member: {
            firstName: 'Kenneth',
            lastName: 'Ellefsen',
            dashEntityUrn:
              'urn:li:fsd_profile:ACoAAABjxbIBjXlBlkIol5kx8McJUSzHOq2YbHU',
            occupation: 'Senior Software Engineer at OneSubsea',
            objectUrn: 'urn:li:member:6538674',
            entityUrn:
              'urn:li:fs_miniProfile:ACoAAABjxbIBjXlBlkIol5kx8McJUSzHOq2YbHU',
            publicIdentifier: 'ellefsen',
            picture: {
              'com.linkedin.common.VectorImage': {
                artifacts: [
                  {
                    width: 100,
                    fileIdentifyingUrlPathSegment:
                      '100_100/profile-displayphoto-shrink_100_100/0/1714858574639?e=1734566400&v=beta&t=RvqUgdzRyqQLHFx8VqQ9jkv6e6VadFevLgaEX6VKQPo',
                    expiresAt: 1734566400000,
                    height: 100,
                  },
                  {
                    width: 200,
                    fileIdentifyingUrlPathSegment:
                      '200_200/profile-displayphoto-shrink_200_200/0/1714858574639?e=1734566400&v=beta&t=aRTqbz-mL-wqCNbg3rtEDzpeUbriXdF8-qkm6mr_EX0',
                    expiresAt: 1734566400000,
                    height: 200,
                  },
                  {
                    width: 400,
                    fileIdentifyingUrlPathSegment:
                      '400_400/profile-displayphoto-shrink_400_400/0/1714858574639?e=1734566400&v=beta&t=gayc4aqR9lQ1cYxGlfNEE7lpo7R_7aBxZr9LWcsImIo',
                    expiresAt: 1734566400000,
                    height: 400,
                  },
                  {
                    width: 800,
                    fileIdentifyingUrlPathSegment:
                      '800_800/profile-displayphoto-shrink_800_800/0/1714858574639?e=1734566400&v=beta&t=5ujhNurSkS1OVAiSkt2IPUF3olfUTH3XuDoDIApL7ag',
                    expiresAt: 1734566400000,
                    height: 800,
                  },
                ],
                rootUrl:
                  'https://media.licdn.com/dms/image/v2/D4D03AQH1wH43dKvLqA/profile-displayphoto-shrink_',
              },
            },
            trackingId: 'iB0c7tKHRQysIzfycNCHFw==',
          },
          entityUrn:
            'urn:li:fs_contributor:(ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE,122,130)',
          profileUrn:
            'urn:li:fs_miniProfile:ACoAAABjxbIBjXlBlkIol5kx8McJUSzHOq2YbHU',
        },
      ],
      timePeriod: { startDate: { month: 3, year: 2011 } },
      description:
        "Finding and reading news is often as challenging as finding something that catches your eye on an overcrowded newsstand. Most often you sift through a number of front pages settling for what you already know, overlooking or simply not finding news that may be worth reading. What if the newsstand was not overcrowded, but only contained what you were looking for? What if you did not have to spend time looking for news, but allowed news to find you? What if news could be as fine and fresh as your favorite cup of coffee, every time? That's Hubii!",
      title: 'Hubii',
      url: 'http://hubii.com',
    },
  ],
  skills: [
    { name: 'Desarrollo front end' },
    { name: 'Desarrollo de software' },
    { name: 'SQL' },
    { name: 'React.js' },
  ],
  urn_id: 'ACoAAAJJY58B9rE8JdCvsfB-2gw8-TU1vUh0tSE',
};
