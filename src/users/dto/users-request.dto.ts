import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { EventsStatusUsers } from '../enums/users.enum';

export class UserRequestDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  externalId: string;

  @IsEnum(EventsStatusUsers)
  @IsNotEmpty()
  role_id: EventsStatusUsers;
}
