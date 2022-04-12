import { Controller, Get, Param } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Ethplorer } from './ethplorer.service';

@Controller('token-metrics')
export class EthplorerController {
  constructor(private readonly ethplorer: Ethplorer) {}

  @Get('topTokenHolders/:tokenId')
  getTopTokenHolders(
    @Param('tokenId') tokenId: string,
  ): Observable<AxiosResponse<unknown>> {
    return this.ethplorer.getTopTokenHolders(tokenId);
  }
}
