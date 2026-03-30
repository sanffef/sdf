import { Test, TestingModule } from '@nestjs/testing';
import { PollsController } from './polls.controller';
import { PollService } from './polls.service';

describe('PollsController', () => {
  let controller: PollsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PollsController],
      providers: [PollService],
    }).compile();

    controller = module.get<PollsController>(PollsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
