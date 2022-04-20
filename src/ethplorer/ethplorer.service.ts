import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class Ethplorer {
  constructor(private httpService: HttpService) {}
  readonly ethplorerUrl = 'https://api.ethplorer.io';

  getTopTokenHolders(
    tokenId: string,
    limit: number,
  ): Observable<AxiosResponse<unknown>> {
    const config = {
      params: { apiKey: process.env.ETHPLORER_API_KEY, limit: limit },
    };

    const url = this.ethplorerUrl + '/getTopTokenHolders/' + tokenId;

    return this.httpService
      .get(url, config)
      .pipe(map((response) => response.data));
  }

  getTokensNew(): Observable<AxiosResponse<unknown>> {
    const config = {
      params: { apiKey: process.env.ETHPLORER_API_KEY },
    };

    const url = this.ethplorerUrl + '/getTokensNew';

    return this.httpService
      .get(url, config)
      .pipe(map((response) => response.data));
  }
}
