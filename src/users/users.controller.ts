import {
  Controller,
  Post,
  Get,
  HttpCode,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserRequestDto } from './dto/users-request.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @HttpCode(HttpStatus.OK)
  @Post('/')
  async create(userRequest: UserRequestDto) {
    return this.usersService.createUser(userRequest);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/')
  async find() {
    return this.usersService.findAllUsers();
  }

  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  async findById(@Param('id') id: string) {
    return this.usersService.findUserById(id);
  }
}
