import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationService } from './organization.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { OrganizationsRepository } from './entities/organizations.entity';
import { Repository } from 'typeorm';
import { organizationRequest } from '../tests/fixtures/organization.fixture';

describe('OrganizationService', () => {
  let service: OrganizationService;
  let repository: Repository<OrganizationsRepository>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrganizationService,
        {
          provide: getRepositoryToken(OrganizationsRepository),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<OrganizationService>(OrganizationService);
    repository = module.get<Repository<OrganizationsRepository>>(
      getRepositoryToken(OrganizationsRepository),
    );
  });

  describe('create', () => {
    it('should create a new organization in database', async () => {
      const saveMock = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(organizationRequest);

      const result = await service.create(organizationRequest);

      expect(saveMock).toHaveBeenCalledWith(organizationRequest);
      expect(result).toEqual(organizationRequest);
    });
  });
});
