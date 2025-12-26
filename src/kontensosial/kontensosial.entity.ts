import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class KontenSosial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  namakontensosial: string;

  @Column()
  kontenusername: string;

  @Column()
  isikonten: string;
}
