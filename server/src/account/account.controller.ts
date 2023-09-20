import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { Public } from '@src/auth/auth.decorator';
import { UUID } from 'crypto';
import { Account } from './schema/account.schema';

@Public()
@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get(':uuid')
  findOne(@Param('uuid') uuid: UUID) {
    return this.accountService.findOne(uuid);
  }

  @Patch(':uuid')
  update(@Param('uuid') uuid: UUID, @Body() UpdateData) {
    return this.accountService.update(uuid, UpdateData);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: UUID) {
    return this.accountService.remove(uuid);
  }
  @Post()
  create(@Body() AccountData: Account) {
    return this.accountService.createAccount(AccountData);
  }

  @Get()
  findAll() {
    return this.accountService.findAll();
  }
}
