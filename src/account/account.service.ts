import { Injectable, NotFoundException } from '@nestjs/common'; 
import { CreateAccountDto } from './dto/create-account.dto'; 
import { UpdateAccountDto } from './dto/update-account.dto'; 
import { Account } from './entities/account.entity'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>, 
   ){}

  async create(createAccountDto: CreateAccountDto){
    const newAccount = this.accountRepository.create(createAccountDto);
    return await this.accountRepository.save(newAccount)
  }

  findAll(): Promise<Account[]> {
    return this.accountRepository.find();
  }

  findOne(id: number): Promise<Account | null > {
    return this.accountRepository.findOneBy({id});
  }

  async update(id: number, updateAccountDto: UpdateAccountDto): Promise<Account> {
    await this.accountRepository.update(id, updateAccountDto);
    const updatedAccount = await this.accountRepository.findOneBy({ id });

    if (!updatedAccount) {
      throw new NotFoundException(`Account #${id} not found`);
    }
    return updatedAccount;
  }

  async remove(id: number): Promise<void> {
    await this.accountRepository.delete(id);
  }
}
