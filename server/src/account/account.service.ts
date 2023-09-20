import { Injectable } from '@nestjs/common';
import { UUID, randomUUID } from 'crypto';
import * as bcrypt from 'bcrypt';
import { Account } from './schema/account.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { hash } from 'bcrypt';
import { validate } from 'class-validator';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name) private readonly accountModel: Model<Account>,
  ) {}

  private Accounts = [];

  async update(uuid: UUID, UpdateData: { key: any; value: any }) {
    let account = this.Accounts.find(
      (account) => account.account_uuid === uuid,
    );
    let key = UpdateData.key;
    let value = UpdateData.value;
    if (key === 'password') {
      account[key] = await this.zhash(value);
    } else {
      account[key] = value;
    }

    return account;
  }

  async createAccount(accountData: Account) {
    console.log('Incoming account data:', accountData);

    try {
      await validate(accountData); // Validate incoming data
    } catch (errors) {
      console.log('Validation errors:', errors);
      throw new Error(errors.toString());
    }

    const hashedPassword = await hash(accountData.password, 10);
    const createdAccount = new this.accountModel({
      ...accountData,
      password: hashedPassword,
    });
    return createdAccount.save();
  }

  // async create(account: { [x: string]: string | Buffer; }) {
  //   account['uuid'] = randomUUID();
  //   account['password'] = await this.zhash(account['password']);
  //   this.Accounts.push(account);
  //   return this.Accounts;
  // }

  findAll() {
    return this.Accounts;
  }

  findOne(uuid: UUID) {
    return this.Accounts.find((account) => account.account_uuid === uuid);
  }

  remove(uuid: UUID) {
    const indexToDelete = this.Accounts.findIndex((obj) => obj.uuid === uuid);
    if (indexToDelete !== -1) {
      this.Accounts.splice(indexToDelete, 1);
    }
    return this.Accounts;
  }

  //   /**
  //    * Hash a password with bcrypt
  //    * @param password password to be hashed
  //    * @returns hashed password
  //    */
  private async zhash(password: string | Buffer) {
    let hash = await bcrypt
      .hash(password, 10)
      .then((hash) => hash)
      .catch((err) => {
        return null;
        // throw new Error(err);
      });
    return hash;
  }
}
