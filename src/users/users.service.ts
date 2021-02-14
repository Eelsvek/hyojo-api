import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private readonly logger = new Logger('UsersService');
  constructor(
    @InjectRepository(User) 
    private usersRepository: Repository<User>
  ) {}
  
  async get(): Promise<User[]> {
    return this.usersRepository.find();
  };

  async create(createUserDto: CreateUserDto){
    const { email } = createUserDto;
    
    const user: User = new User();
    user.email = email

    try {
      await user.save();
    } catch (e) {
      this.logger.error('Error creating user', e);
      throw new InternalServerErrorException();
    }
  };

  async delete(id: number) {
    try {
      await this.usersRepository.softDelete({ id })
    } catch (e) {
      this.logger.error(`Error deleting user ${id}`, e);
      throw new InternalServerErrorException();
    }
  }
}
