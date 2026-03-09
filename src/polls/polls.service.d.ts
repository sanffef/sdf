import { CreatePollDto } from './dto/create-poll.dto';
import { UpdatePollDto } from './dto/update-poll.dto';
import { Repository } from 'typeorm';
import { Poll } from './entities/poll.entity';
export declare class PollsService {
    constructor(PollRepository: Repository<Poll>);
    create(createPollDto: CreatePollDto): string;
    findAll(): void;
    findOne(id: number): string;
    update(id: number, updatePollDto: UpdatePollDto): string;
    remove(id: number): string;
}
