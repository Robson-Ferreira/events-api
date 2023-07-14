import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { RolesUsers } from '../enums/roles-users';

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

  @Column({ name: 'external_id' })
  external_id: string;

  @Column({ name: 'roles_id', type: 'enum', enum: RolesUsers })
  roles_id: RolesUsers;

  @ManyToOne(() => UserRepository, (UserRepository) => UserRepository.id)
  @JoinColumn({ name: 'created_by' })
  created_by: UserRepository;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;
}
