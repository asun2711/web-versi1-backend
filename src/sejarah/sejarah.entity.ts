import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Sejarah {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  judulsejarah: string;

  @Column()
  isisejarah: string;

  @Column()
  visi: string;

  @Column()
  misi: string;

  @Column({ nullable: true })
  gambarsejarah: string;
}
