import { Test, TestingModule } from '@nestjs/testing';
import { HelperController } from './helper.controller';

describe('HelperfunctionsController', () => {
  let controller: HelperController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelperController],
    }).compile();

    controller = module.get<HelperController>(HelperController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
