import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: CatsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [AppService],
    }).compile();

    appController = app.get<CatsController>(CatsController);
  });

  describe('root', () => {
    it('should return "This action returns all cats"', () => {
      const mockRequest = {} as any; 
      
      expect(appController.findAll(mockRequest)).toBe('This action returns all cats');
    });
  })});
