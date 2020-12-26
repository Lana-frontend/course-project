import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Socet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: boolean;

  @Column()
  lastTime: string;
}