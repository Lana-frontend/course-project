import { Module } from '@nestjs/common';
import { SmartSocetModule } from './smartSocet/smart-socet.module'
import { Socet } from './smartSocet/Entity/socet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'qwerty',
      database: 'iotDb',
      entities: [Socet],
      synchronize: false,
    }),
    SmartSocetModule
  ],
})
export class AppModule {}
