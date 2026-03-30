import { Injectable } from '@nestjs/common';
import { CreatePollDto } from './dto/create-poll.dto';
import { UpdatePollDto } from './dto/update-poll.dto';
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { Poll } from './entities/poll.entity'


@Injectable()
export class PollService {
  constructor(
    @InjectRepository(Poll)
    private readonly pollRepository: Repository <Poll>
  ){}
  async create(createPollDto: CreatePollDto){
      const newPoll = this.pollRepository.create(createPollDto);
      return await this.pollRepository.save(newPoll)
  }

  findAll(): Promise<Poll[]> {
      return this.pollRepository.find();
    }

  async findOne(id: number): Promise<Poll | null> {
    return await this.pollRepository.findOneBy({id});
  }

  async update(id: number, updatePollDto: UpdatePollDto): Promise<Poll | null> {
    await this.pollRepository.update(id, updatePollDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.pollRepository.delete(id);
  }
}
