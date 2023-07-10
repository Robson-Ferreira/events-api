import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './entities/user.entity';
import { UserRequestDto } from './dto/users-request.dto';
import { Repository } from 'typeorm';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: Repository<UserRepository>,
  ) {}

  async createUser(userRequest: UserRequestDto) {
    return this.userRepository.save(userRequest);
  }
}
