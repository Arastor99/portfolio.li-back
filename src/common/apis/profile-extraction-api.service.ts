import {
  Injectable,
  Logger,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import {
  PROFILE_EXTRACTION_API_URL,
  PROFILE_EXTRACTION_API_KEY,
} from '../constants';

@Injectable()
class ProfileExtractionApiService {
  private readonly logger = new Logger(ProfileExtractionApiService.name);

  private readonly API_URL: string;
  private readonly API_KEY: string;

  constructor(private readonly configService: ConfigService) {
    this.API_URL = this.configService.get(PROFILE_EXTRACTION_API_URL);
    this.API_KEY = this.configService.get(PROFILE_EXTRACTION_API_KEY);
  }

  async getProfile(publicId: string) {
    this.logger.debug(`Fetching profile with publicId: ${publicId}`);

    const headers = {
      'Content-Type': 'application/json',
      'X-API-Key': this.API_KEY,
    };

    const response = await fetch(`${this.API_URL}/${publicId}/raw`, {
      headers,
      signal: AbortSignal.timeout(60000), // 30 seconds timeout
    }).catch(() => {
      throw new ServiceUnavailableException(
        'Service is temporarily unavailable',
      );
    });

    if (!response.ok) {
      this.logger.debug(
        `Failed to fetch profile with publicId: ${publicId}, Response Details: ${response}`,
      );

      if (response.status === 503)
        throw new ServiceUnavailableException(
          'Service is temporarily unavailable',
        );
      else if (response.status === 401)
        throw new ServiceUnavailableException(
          'Service is temporarily unavailable',
        );

      throw new Error('Failed to fetch profile');
    }

    const profileResponse = await response.json();

    this.logger.debug(`Profile fetched successfully: ${publicId}`);
    return profileResponse;
  }
}

export default ProfileExtractionApiService;
