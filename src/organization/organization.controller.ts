import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationsRequestDto } from './dto/organization-request.dto';

@Controller('organization')
export class OrganizationController {
  constructor(private organizationService: OrganizationService) {}

  @Post('/')
  async create(@Body() organizationDto: OrganizationsRequestDto) {
    return this.organizationService.create(organizationDto);
  }

  @Get('/')
  async find() {
    return this.organizationService.findAll();
  }

  @Get('/:id')
  async findById(@Param('id') id: string) {
    return this.organizationService.findById(id);
  }
}
