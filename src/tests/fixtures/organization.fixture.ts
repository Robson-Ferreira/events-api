import { OrganizationsRequestDto } from '../../../src/organization/dto/organization-request.dto';
import { OrganizationsType } from '../../../src/organization/enums/organizations.enum';
import { UserRepository } from '../../../src/users/entities/user.entity';
import { faker } from '@faker-js/faker';

export const organizationDto: OrganizationsRequestDto = {
  name: faker.lorem.word(),
  organization_type: OrganizationsType.PJ,
  responsible_name: faker.person.fullName(),
  logo: faker.image.avatar(),
  created_by: new UserRepository(),
};

export const createdOrganization = {
  id: faker.string.uuid(),
  name: faker.lorem.word(),
  organization_type: OrganizationsType.PF,
  responsible_name: faker.person.fullName(),
  logo: faker.image.avatar(),
  created_by: new UserRepository(),
  created_at: new Date(),
  updated_at: new Date(),
};

export const organizationRequest = {
  id: faker.string.uuid(),
  name: faker.lorem.word(),
  organization_type: OrganizationsType.PF,
  responsible_name: faker.person.fullName(),
  logo: faker.image.avatar(),
  created_by: new UserRepository(),
  created_at: new Date(),
  updated_at: new Date(),
};
