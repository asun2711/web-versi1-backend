import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Radiologi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  namaradiologi: string;

  @Column()
  isiradiologi: string;

  @Column({ nullable: true })
  gambarradiologi: string;
}
