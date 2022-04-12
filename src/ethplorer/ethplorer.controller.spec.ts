import { Test, TestingModule } from '@nestjs/testing';
import { EthplorerController } from './ethplorer.controller';
import { Ethplorer } from './ethplorer.service';

describe('EthplorerController', () => {
  let appController: EthplorerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EthplorerController],
      providers: [Ethplorer],
    }).compile();

    ethplorerController = app.get<EthplorerController>(EthplorerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ethplorerController.getHello()).toBe('Hello World!');
    });
  });
});
