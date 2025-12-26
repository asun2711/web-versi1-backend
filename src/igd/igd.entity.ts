import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Igd {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  namaigd: string;

  @Column()
  isiigd: string;

  @Column({ nullable: true })
  gambarigd: string;
}
