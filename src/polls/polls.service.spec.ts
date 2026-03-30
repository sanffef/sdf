import { Test, TestingModule } from '@nestjs/testing';
import { PollService } from './polls.service';

describe('PollsService', () => {
  let service: PollService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PollService],
    }).compile();

    service = module.get<PollService>(PollService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
