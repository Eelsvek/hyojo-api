import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];
  
  create(user: User) {
    console.log('user', user)
    this.users.push(user);
  };

  findAll(): User[] {
    return this.users;
  }
}
