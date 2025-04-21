import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { pipeline } from 'stream';
import { promisify } from 'util';

const streamPipeline = promisify(pipeline);

@Controller('proxy-image')
export class ProxyController {
  @Get()
  async getImageByProxy(@Query('url') url: string, @Res() res: Response) {
    if (!url || !url.includes('media.licdn')) {
      return res.status(400).send('Invalid URL');
    }

    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          referer: 'https://www.linkedin.com/',
        },
      });

      if (!response.ok || !response.body) {
        return res.status(500).send('Failed to fetch image');
      }

      res.setHeader(
        'Content-Type',
        response.headers.get('content-type') || 'image/jpeg',
      );
      await streamPipeline(response.body, res);
    } catch (error) {
      console.error('Fetch error:', error);
      res.status(500).send('Error fetching image');
    }
  }
}
