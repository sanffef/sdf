import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    create(createAccountDto: CreateAccountDto): Promise<import("./entities/account.entity").Account>;
    findAll(): Promise<import("./entities/account.entity").Account[]>;
    findOne(id: string): Promise<import("./entities/account.entity").Account | null>;
    update(id: string, updateAccountDto: UpdateAccountDto): Promise<import("./entities/account.entity").Account>;
    remove(id: string): Promise<void>;
}
