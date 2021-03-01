import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import bcrypt from 'bcrypt';
import { bindCallback } from 'rxjs';

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
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user: User = new User();
    user.email = email;
    user.password = hashedPassword;

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
