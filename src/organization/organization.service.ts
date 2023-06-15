import { InjectRepository } from '@nestjs/typeorm';
import { OrganizationsRepository } from '../organization/entities/organizations.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { OrganizationsRequestDto } from './dto/organization-request.dto';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(OrganizationsRepository)
    private organizationRepository: Repository<OrganizationsRepository>,
  ) {}

  async create(organizationRequest: OrganizationsRequestDto) {
    return this.organizationRepository.save(organizationRequest);
  }

  async findAll(): Promise<OrganizationsRepository[]> {
    const allUsers = await this.organizationRepository.find();
    return allUsers;
  }

  async findById(id: string) {
    const user = await this.organizationRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }
}
