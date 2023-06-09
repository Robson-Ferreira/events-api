import { IsEnum, IsString } from 'class-validator';
import { EventsStatusUsers } from '../enums/users.enum';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  externalId: string;

  @IsEnum(EventsStatusUsers)
  role_id: EventsStatusUsers;
}
