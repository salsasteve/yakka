import { NestFactory } from '@nestjs/core';
import { YakkaBot } from './yakkabot.module';

async function bootstrap() {
  const app = await NestFactory.create(YakkaBot, { cors: true });
  app.enableCors({
    origin: [
      'http://localhost:4000',
      'http://orca.watch',
      'http://www.orca.watch',
      'https://localhost:4000',
      'https://orca.watch',
      'https://www.orca.watch',
    ],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Accept', 'Origin'],
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
