import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get() 
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Delete() 
  async delete(@Body() deleteUserDto: DeleteUserDto) {
    const { userId } = deleteUserDto;

    return this.usersService.delete(userId);
  }


  @Post() 
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
