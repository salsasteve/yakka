import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EthplorerController } from './ethplorer/ethplorer.controller';
import { Ethplorer } from './ethplorer/ethplorer.service';
import { FirebaseModule } from './firebase/firebase.module';

@Module({
  imports: [HttpModule, ConfigModule.forRoot(), FirebaseModule],
  controllers: [EthplorerController],
  providers: [Ethplorer],
})
export class YakkaBot {}
