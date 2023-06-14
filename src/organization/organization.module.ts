import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationsRepository } from './entities/organizations.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrganizationsRepository])],
  controllers: [OrganizationController],
  providers: [OrganizationService],
})
export class OrganizationModule {}
