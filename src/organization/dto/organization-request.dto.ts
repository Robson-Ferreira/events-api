import { IsString, IsEnum } from 'class-validator';
import { EventsOrganizationsType } from '../enums/organizations.enum';
import { UserRepository } from '../../users/entities/user.entity';

export class OrganizationsRequestDto {
  @IsString()
  name: string;

  @IsEnum(EventsOrganizationsType)
  organization_type: EventsOrganizationsType;

  @IsString()
  responsible_name: string;

  @IsString()
  logo: string;

  @IsString()
  created_by: UserRepository;
}
