import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoingeckoController } from './coingecko/coingecko.controller';
import { CoingeckoService } from './coingecko/coingecko.service';
import { EthplorerController } from './ethplorer/ethplorer.controller';
import { Ethplorer } from './ethplorer/ethplorer.service';
import { HelperModule } from './helper/helper.module';

@Module({
  imports: [HttpModule, ConfigModule.forRoot(), HelperModule],
  controllers: [EthplorerController, CoingeckoController],
  providers: [Ethplorer, CoingeckoService],
})
export class YakkaBot {}
