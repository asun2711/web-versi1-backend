import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Berita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  judulberita: string;

  @Column()
  isiberita: string;

  @Column()
  tanggalberita: string;

  @Column()
  namauploader: string;

  @Column({ nullable: true })
  gambarberita: string;
}
