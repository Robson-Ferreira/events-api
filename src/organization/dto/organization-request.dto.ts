import {
  IsString,
  IsEnum,
  IsNotEmpty,
  Matches,
  IsOptional,
} from 'class-validator';
import { OrganizationsType } from '../enums/organizations.enum';
import { UserRepository } from '../../users/entities/user.entity';
import { validations } from '../helpers/validation.helpers';
import { Messages } from '../helpers/message.helper';

export class OrganizationsRequestDto {
  @IsString()
  @Matches(validations.validationName, {
    message: Messages.VALIDATION_NAME,
  })
  name: string;

  @IsEnum(OrganizationsType)
  @IsNotEmpty()
  organization_type: OrganizationsType;

  @IsOptional()
  @IsString()
  @Matches(validations.validationResponsibleName, {
    message: Messages.VALIDATION_RESPONSIBLE_NAME,
  })
  responsible_name: string;

  @IsOptional()
  @IsString()
  logo: string;

  @IsString()
  created_by: UserRepository;
}
