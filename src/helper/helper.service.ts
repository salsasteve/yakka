import { Injectable } from '@nestjs/common';
import { catchError } from 'rxjs';
import { cryptoList } from './constants/cryptoList.json';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const WAValidator = require('multicoin-address-validator');

@Injectable()
export class HelperService {
  validToken: Array<string> = [];
  isAddressValid(address: string) {
    cryptoList.forEach((token) => {
      const valid = WAValidator.validate(address, token);

      if (valid) this.validToken.push(token);
    });
    return this.validToken.toString();
  }

  isAddressValidOn(address: string, token: string) {
    try {
      return WAValidator.validate(address, token);
    } catch (error) {
      catchError(error);
      return 'Token/Chain is not supported';
    }
  }
}
