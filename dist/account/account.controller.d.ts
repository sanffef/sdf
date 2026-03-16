import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    create(createAccountDto: CreateAccountDto): Promise<import("./entities/account.entity").Account>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAccountDto: UpdateAccountDto): string;
    remove(id: string): string;
}
