import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Slide {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  judulslide: string;

  @Column()
  isislide: string;

  @Column({ nullable: true })
  gambarslide: string;
}
