import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  
  async create(createUserDto: CreateUserDto){
    const { email } = createUserDto;
    
    const user = new User();
    user.email = email

    try {
      await user.save();
    } catch (e) {
      Logger.log('Error', e);
    }
  };
}
