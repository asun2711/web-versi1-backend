import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Patner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  namapatner: string;

  @Column({ nullable: true })
  gambarpatner: string;
}
