import { Controller, Get, Param } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { CoingeckoService } from './coingecko.service';

@Controller('coingecko')
export class CoingeckoController {
  constructor(private readonly coingeckoService: CoingeckoService) {}

  @Get('topTokenHolders/:include_platform?')
  getCoinList(
    @Param('include_platform') include_platform: boolean,
  ): Observable<AxiosResponse<unknown>> {
    return this.coingeckoService.getCoinList(include_platform);
  }
}
