import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EthplorerController } from './ethplorer/ethplorer.controller';
import { Ethplorer } from './ethplorer/ethplorer.service';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [EthplorerController],
  providers: [Ethplorer],
})
export class YakkaBot {}
