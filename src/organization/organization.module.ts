import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationsRepository } from './entities/organizations.entity';
import { AuthGuard } from 'src/config/guards/auth/auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([OrganizationsRepository])],
  controllers: [OrganizationController],
  providers: [OrganizationService, AuthGuard, OrganizationController],
})
export class OrganizationModule {}
