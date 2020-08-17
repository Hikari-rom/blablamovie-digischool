import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() createUser: CreateUserDto): Promise<User> {
    return this.userService.insertUser(createUser);
  }

  @Get('')
  getAllUsers(): Promise<User[]> {
    return this.userService.find();
  }
}
