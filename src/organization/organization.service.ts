import { InjectRepository } from '@nestjs/typeorm';
import { OrganizationsRepository } from '../organization/entities/organizations.entity';
import { Injectable } from '@nestjs/common';
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
}
