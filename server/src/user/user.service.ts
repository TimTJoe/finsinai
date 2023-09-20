// user.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { UUID, randomUUID } from 'crypto';
import bcrypt from "bcrypt"
import { AsyncLocalStorage } from 'node:async_hooks';
const asyncLocalStorage = new AsyncLocalStorage();

export type UserType = {
  userId: UUID;
  fullname: string;
  email: string;
  password: string;
  picture?: string;
  [x: string]: any;
};

@Injectable()
export class UserService {
  private readonly DemoUser = [
    {
      userId: 1,
      fullname: 'john',
      email: 'email@email.com',
      password: 'password',
    },
  ];

  findOne(email: string) {
    try {
      return this.DemoUser.find((user) => user.email === email);
    } catch (error) {
      throw new NotFoundException('User not found!');
    }
  }

  public async create(user: Record<string, any>) {
    /**
     * validate param
     * DONE: add a user id with crypto
     * gen salt
     * hashed the password
     * stored record to localstorage
     */
    user['userId'] = randomUUID();
    user.password = await bcrypt.hash(user.password, 10);
    return user;
  }

}
