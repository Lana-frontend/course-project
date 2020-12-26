import { Controller, Get, Post } from '@nestjs/common';
import { SmartSocetService } from './smart-socet.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Socet } from './Entity/socet.entity';
import { Repository } from 'typeorm';

@Controller('socet')
export class SmartSocetController {
  constructor(
    private readonly smartSocetService: SmartSocetService,
  ) {}

  @Get()
  async getInformation(): Promise<Socet> {
    return await this.smartSocetService.getInfo();
  }

  @Post('change')
  async changeSocet(): Promise<String>  {
    return this.smartSocetService.changeSocet();
  }
}
