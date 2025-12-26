import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Mcu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  namamcu: string;

  @Column()
  hargamcu: string;

  @Column()
  isimcu: string;

  @Column({ nullable: true })
  gambarmcu: string;
}
