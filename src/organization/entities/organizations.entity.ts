import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { OrganizationsType } from '../enums/organizations.enum';
import { UserRepository } from '../../users/entities/user.entity';
import { OrganizationStatusEnum } from '../enums/status.enum';
@Entity({ name: 'organizations' })
export class OrganizationsRepository {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name' })
  name: string;

  @Column({
    name: 'organization_type',
    type: 'enum',
    enum: OrganizationsType,
  })
  organization_type: OrganizationsType;

  @Column({ name: 'responsible_name' })
  responsible_name: string;

  @Column({ name: 'logo' })
  logo: string;

  @ManyToOne(() => UserRepository, (userRepository) => userRepository.id)
  @JoinColumn({ name: 'id' })
  created_by: UserRepository;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  @Column({
    default: OrganizationStatusEnum.ACTIVED,
    type: 'enum',
    enum: OrganizationStatusEnum,
  })
  status: OrganizationStatusEnum;
}
