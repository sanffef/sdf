import { PollsService } from './polls.service';
import { CreatePollDto } from './dto/create-poll.dto';
import { UpdatePollDto } from './dto/update-poll.dto';
export declare class PollsController {
    private readonly pollsService;
    constructor(pollsService: PollsService);
    create(createPollDto: CreatePollDto): string;
    findAll(): void;
    findOne(id: string): string;
    update(id: string, updatePollDto: UpdatePollDto): string;
    remove(id: string): string;
}
