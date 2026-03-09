import { Injectable } from '@nestjs/common';
import { CreatePollDto } from './dto/create-poll.dto';
import { UpdatePollDto } from './dto/update-poll.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Poll } from './entities/poll.entity';


@Injectable()
export class PollsService {
  PollsRepository: any;
  constructor(@InjectRepository(Poll)
    PollRepository: Repository<Poll>) {
    
  }
  create(createPollDto: CreatePollDto) {
    return this.PollsRepository.create();
    
  }

  findAll() {
    return this.PollsRepository.findAll();
  }

  findOne(id: number) {
    return `This action updates a #${id} poll`;
  }

  update(id: number, updatePollDto: UpdatePollDto) {
    return `This action updates a #${id} poll`;
  }

  remove(id: number) {
    return `This action removes a #${id} poll`;
  }
}
