import { Test, TestingModule } from '@nestjs/testing';
import { HelperService } from './helper.service';

describe('HelperfunctionsService', () => {
  let service: HelperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelperService],
    }).compile();

    service = module.get<HelperfunctionsService>(HelperfunctionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
