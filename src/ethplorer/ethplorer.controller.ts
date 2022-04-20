import { Controller, Get, Param } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Ethplorer } from './ethplorer.service';

@Controller('token-metrics')
export class EthplorerController {
  constructor(private readonly ethplorer: Ethplorer) {}

  @Get('topTokenHolders/:tokenId/:limit')
  getTopTokenHolders(
    @Param('tokenId') tokenId: string,
    @Param('limit') limit: number,
  ): Observable<AxiosResponse<unknown>> {
    return this.ethplorer.getTopTokenHolders(tokenId, limit);
  }

  @Get('tokensNew')
  getTokensNew(): Observable<AxiosResponse<unknown>> {
    return this.ethplorer.getTokensNew();
  }

  @Get('addressInfo/:address/:contractAddress?')
  getAddressInfo(
    @Param('address') address: string,
    @Param('contractAddress') contractAddress: string,
  ): Observable<AxiosResponse<unknown>> {
    return this.ethplorer.getAddressInfo(address, contractAddress);
  }
}
