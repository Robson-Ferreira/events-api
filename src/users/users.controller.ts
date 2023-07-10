import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserRequestDto } from './dto/users-request.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/')
  async create(@Body() userRequest: UserRequestDto) {
    return this.usersService.createUser(userRequest);
  }
}
