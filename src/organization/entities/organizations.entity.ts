import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { EventsOrganizationsType } from '../enums/organizations.enum';
import { UserRepository } from '../../users/entities/user.entity';

@Entity({ name: 'organizations' })
export class OrganizationsRepository {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name' })
  name: string;

  @Column({
    name: 'organization_type',
    type: 'enum',
    enum: EventsOrganizationsType,
  })
  organization_type: EventsOrganizationsType;

  @Column({ name: 'responsible_name' })
  responsible_name: string;

  @Column({ name: 'logo' })
  logo: string;

  @OneToOne(() => UserRepository)
  @JoinColumn({ name: 'created_by' })
  created_by: UserRepository;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;
}
