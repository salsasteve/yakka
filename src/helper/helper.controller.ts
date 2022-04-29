import { Controller, Get, Param } from '@nestjs/common';
import { HelperService } from './helper.service';

@Controller('helper')
export class HelperController {
  constructor(private readonly helperService: HelperService) {}

  @Get('isAddressValid/:address')
  isAddressValid(@Param('address') address: string) {
    return this.helperService.isAddressValid(address);
  }
  @Get('isAddressValidOn/:address/:token')
  isAddressValidOn(
    @Param('address') address: string,
    @Param('token') token: string,
  ) {
    return this.helperService.isAddressValidOn(address, token);
  }
}
