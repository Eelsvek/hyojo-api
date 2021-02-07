import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];
  
  create(user: User) {
    this.users.push(user);
  };

  delete(userId: string): string {
    // set user active flag to false
    const index = this.users.findIndex(user => user.id === userId);
    this.users.splice(index);

    return userId
  };

  findAll(): User[] {
    return this.users;
  }
}
