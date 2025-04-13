import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger, LogLevel } from '@nestjs/common';

import { AppModule } from './app.module';

import { NODE_ENV, PORT } from './common/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const nodeEnv = configService.get<string>(NODE_ENV);
  const logLevels: LogLevel[] =
    nodeEnv === 'development'
      ? ['error', 'warn', 'log', 'debug', 'verbose']
      : ['error', 'warn', 'log'];
  app.useLogger(logLevels);

  Logger.debug(
    `Environment: ${nodeEnv} | Active logs: [${logLevels.join(', ')}]`,
    'Bootstrap',
  );

  const port = configService.get<number>(PORT) || 3000;
  await app.listen(port);
  Logger.log(`Server is running on port ${port}`, 'Bootstrap');
}
bootstrap();
