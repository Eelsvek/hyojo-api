import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserInterface } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  
  async create(user: UserInterface): Promise<void>{
    console.log('wee', user);
    try {
      this.usersRepository.create(user)
    } catch (e) {
      console.log('Error', e)
    }
  };
}
