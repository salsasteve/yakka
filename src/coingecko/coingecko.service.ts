import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class CoingeckoService {
  constructor(private httpService: HttpService) {}
  readonly coingeckoUrl = 'https://api.coingecko.com/api/v3';

  getCoinList(include_platform: boolean): Observable<AxiosResponse<unknown>> {
    const config = {
      params: { include_platform: include_platform },
    };

    const url = this.coingeckoUrl + '/coins/list';

    return this.httpService
      .get(url, config)
      .pipe(map((response) => response.data));
  }
}
