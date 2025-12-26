import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Spesialis {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  judulspesialis: string;

  @Column({ nullable: true })
  gambarspesialis: string;
}
