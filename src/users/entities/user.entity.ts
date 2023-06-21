import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { EventsStatusUsers } from '../enums/users.enum';

@Entity({ name: 'users' })
export class UserRepository {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'username', unique: true })
  username: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'email_verified' })
  email_verified: boolean;

  @Column({ name: 'picture' })
  picture: string;

  @Column({ name: 'externalId ' })
  sub: string;

  @Column({ name: 'userRoles', type: 'enum', enum: EventsStatusUsers })
  userRoles: EventsStatusUsers;

  @ManyToOne(() => UserRepository, (UserRepository) => UserRepository.id)
  @JoinColumn({ name: 'created_by' })
  created_by: UserRepository;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;
}
