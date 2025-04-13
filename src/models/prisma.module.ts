import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // This is a global module
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
