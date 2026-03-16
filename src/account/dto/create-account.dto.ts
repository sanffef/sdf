export class CreateAccountDto {
    readonly login: string;
    readonly password: string;
}
import { AccountService } from "../account.service";
import { Controller, Body,  } from "@nestjs/common";