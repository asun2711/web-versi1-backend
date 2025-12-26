import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Pengumuman {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  judulpengumuman: string;

  @Column()
  isipengumuman: string;

  @Column()
  tanggalpengumuman: string;

  @Column()
  namauploader: string;

  @Column({ nullable: true })
  gambarpengumuman: string;
}
