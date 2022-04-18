import { NestFactory } from '@nestjs/core';
import { YakkaBot } from './yakkabot.module';

async function bootstrap() {
  const app = await NestFactory.create(YakkaBot);
  const whitelist = ['http://localhost:4000', 'https://orca.watch'];
  app.enableCors({
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        console.log('allowed cors for:', origin);
        callback(null, true);
      } else {
        console.log('blocked cors for:', origin);
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Accept', 'Origin'],
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
