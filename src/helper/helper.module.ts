import { Module } from '@nestjs/common';
import { HelperController } from './helper.controller';
import { HelperService } from './helper.service';

@Module({
  providers: [HelperService],
  controllers: [HelperController],
})
export class HelperModule {}
