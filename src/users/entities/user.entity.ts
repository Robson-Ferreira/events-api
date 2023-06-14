import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { EventsStatusUsers } from '../enums/users.enum';

@Entity({ name: 'users' })
export class UserRepository {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'username', unique: true })
  username: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'externalId' })
  externalId: string;

  @Column({ name: 'role_id', type: 'enum', enum: EventsStatusUsers })
  role_id: EventsStatusUsers;
}
