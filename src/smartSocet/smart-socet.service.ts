import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { Socet } from './Entity/socet.entity';

@Injectable()
export class SmartSocetService {
  constructor(
    @InjectRepository(Socet)
    private readonly socetService: Repository<Socet>
  ) {}

  async getInfo(): Promise<Boolean> {
    const socet = await this.socetService.find()

    return await socet[0].status;
  }

  async changeSocet(): Promise<String> {
    const socet = await this.socetService.find();
        
    return await getConnection()
        .createQueryBuilder()
        .update(Socet)
        .set({ status: !socet[0].status })
        .where('id = :id', { id: socet[0].id })
        .execute()
        .then((res) => {
          if(res.affected === 1){
            return 'Done!'
          }
        });
  }
}
