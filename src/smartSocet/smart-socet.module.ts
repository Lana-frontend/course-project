import { Module } from '@nestjs/common';
import { SmartSocetController } from './smart-socet.controller';
import { SmartSocetService } from './smart-socet.service';
import { Socet } from './Entity/socet.entity';

import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forFeature([Socet])
  ],
  controllers: [SmartSocetController],
  providers: [SmartSocetService],
})
export class SmartSocetModule {}
