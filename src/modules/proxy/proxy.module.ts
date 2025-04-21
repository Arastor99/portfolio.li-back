import { Module } from '@nestjs/common';
import { ProxyService } from './proxy.service';
import { ProxyImageController } from './proxy.controller';

@Module({
  controllers: [ProxyImageController],
  providers: [ProxyService],
})
export class ProxyModule {}
