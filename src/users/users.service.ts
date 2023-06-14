import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findAllUsers(): Promise<UserRepository[]> {
    const allUsers = await this.userRepository.find();
    return allUsers;
  }

  async findUserById(id: string) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }
}
