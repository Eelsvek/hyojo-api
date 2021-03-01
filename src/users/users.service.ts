import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

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

  async getByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ email });
  }

  async create(createUserDto: CreateUserDto){
    const { email, password } = createUserDto;
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);

    const user: User = new User();
    user.email = email;
    user.password = hash;

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
