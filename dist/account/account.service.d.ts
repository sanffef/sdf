import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';
import { Repository } from 'typeorm';
export declare class AccountService {
    private readonly accountRepository;
    constructor(accountRepository: Repository<Account>);
    create(createAccountDto: CreateAccountDto): Promise<Account>;
    findAll(): Promise<Account[]>;
    findOne(id: number): Promise<Account | null>;
    update(id: number, updateAccountDto: UpdateAccountDto): Promise<Account>;
    remove(id: number): Promise<void>;
}
