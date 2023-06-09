import { IsString, IsEnum } from 'class-validator';
import { EventsOrganizationType } from '../enums/organization.enum';

export class CreateOrganizationDto {
  @IsString()
  name: string;

  @IsEnum(EventsOrganizationType)
  organization_type: EventsOrganizationType;

  @IsString()
  responsible_name: string;

  @IsString()
  logo: string;

  @IsString()
  created_by: string;
}
