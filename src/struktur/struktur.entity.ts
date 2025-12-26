import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Struktur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  namadireksi: string;

  @Column()
  gelardireksi: string;

  @Column()
  jabatandireksi: string;

  @Column()
  masajabatandireksi: string;

  @Column({ nullable: true })
  gambardireksi: string;
}
