import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { EventsOrganizationType } from '../enums/organization.enum';
import { User } from '../../users/entities/user.entity';

@Entity({ name: 'organization' })
export class Organization {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name' })
  name: string;

  @Column({
    name: 'organization_type',
    type: 'enum',
    enum: EventsOrganizationType,
  })
  organization_type: EventsOrganizationType;

  @Column({ name: 'responsible_name' })
  responsible_name: string;

  @Column({ name: 'logo' })
  logo: string;

  @OneToOne(() => User)
  @JoinColumn()
  created_by: User;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;
}
