import { Body, Controller, Post, UseGuards, SetMetadata } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationsRequestDto } from './dto/organization-request.dto';
import { AuthGuard } from '../config/guards/auth/auth.guard';
import { RolesGuard } from '../config/guards/roles';
import { RolesUsers } from 'src/users/enums/roles-users';

@Controller('organizations')
export class OrganizationController {
  constructor(private organizationService: OrganizationService) {}

  @Post('/create')
  @UseGuards(AuthGuard, RolesGuard)
  @SetMetadata('roles', [RolesUsers.ADMIN])
  async create(@Body() organizationDto: OrganizationsRequestDto) {
    return this.organizationService.create(organizationDto);
  }
}
