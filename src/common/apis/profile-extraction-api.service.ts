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
  constructor(private readonly configService: ConfigService) {}

  async getProfile(publicId: string) {
    this.logger.debug(`Fetching profile with publicId: ${publicId}`);

    const url = this.configService.get(PROFILE_EXTRACTION_API_URL);

    const headers = {
      'Content-Type': 'application/json',
      'X-API-Key': this.configService.get(PROFILE_EXTRACTION_API_KEY),
    };

    const response = await fetch(`${url}/${publicId}/raw`, {
      headers,
    });
    if (!response.ok) {
      if (response.status === 503)
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
