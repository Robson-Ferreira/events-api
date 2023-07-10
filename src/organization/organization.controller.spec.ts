import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';
import {
  organizationDto,
  createdOrganization,
} from '../tests/fixtures/organization.fixture';
import { OrganizationsRepository } from './entities/organizations.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('OrganizationController', () => {
  let controller: OrganizationController;
  let service: OrganizationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganizationController],
      providers: [
        OrganizationService,
        {
          provide: getRepositoryToken(OrganizationsRepository),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<OrganizationController>(OrganizationController);
    service = module.get<OrganizationService>(OrganizationService);
  });

  describe('create', () => {
    it('should create a new organization', async () => {
      jest.spyOn(service, 'create').mockResolvedValue(createdOrganization);

      const result = await controller.create(organizationDto);

      expect(service.create).toHaveBeenCalledWith(organizationDto);
      expect(result).toBe(createdOrganization);
    });
  });
});
