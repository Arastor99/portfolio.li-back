import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger, LogLevel, ValidationPipe } from '@nestjs/common';

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

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  const port = configService.get<number>(PORT);
  await app.listen(port).catch((error) => {
    Logger.error(`Error occurred initialize server ${error.message}`);
    throw error;
  });
  Logger.log(`Server is running on port ${port}`, 'Bootstrap');
}
bootstrap();
