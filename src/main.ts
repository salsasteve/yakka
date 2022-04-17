import { NestFactory } from '@nestjs/core';
import { YakkaBot } from './yakkabot.module';

async function bootstrap() {
  const app = await NestFactory.create(YakkaBot);
  app.enableCors({
    origin: ['\\.localhost\\:4000$', '\\.orca\\.watch$'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Accept', 'Origin'],
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
