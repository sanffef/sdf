import { Module } from '@nestjs/common';
import { PollService } from './polls.service';
import { PollsController } from './polls.controller';

@Module({
  controllers: [PollsController],
  providers: [PollService],
})
export class PollsModule {}
