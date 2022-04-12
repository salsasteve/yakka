import { NestFactory } from '@nestjs/core';
import { YakkaBot } from './yakkabot.module';

async function bootstrap() {
  const app = await NestFactory.create(YakkaBot);
  await app.listen(3000);
}
bootstrap();
