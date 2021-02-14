import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private readonly logger = new Logger('UsersService');

  async create(createUserDto: CreateUserDto){
    const { email } = createUserDto;
    
    const user = new User();
    user.email = email

    try {
      await user.save();
    } catch (e) {
      this.logger.error('Error', e);
    }
  };
}
