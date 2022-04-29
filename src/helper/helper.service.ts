import { Injectable } from '@nestjs/common';
import { catchError } from 'rxjs';
import { cryptoList } from './constants/cryptoList.json';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MAValidator = require('multicoin-address-validator');

@Injectable()
export class HelperService {
  isAddressValid(address: string): string {
    const validTokens: string[] = [];
    cryptoList.forEach((token) => {
      const valid = MAValidator.validate(address, token);

      if (valid) validTokens.push(token);
    });
    return JSON.stringify({ validTokens });
  }

  isAddressValidOn(address: string, token: string): boolean {
    try {
      return MAValidator.validate(address, token);
    } catch (error) {
      catchError(error);
      console.log('Token/Chain may not be supported');
    }
  }
}
