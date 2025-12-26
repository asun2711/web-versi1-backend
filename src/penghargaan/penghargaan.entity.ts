import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Penghargaan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  judulpenghargaan: string;

  @Column()
  isipenghargaan: string;

  @Column()
  tanggalpenghargaan: string;

  @Column()
  namauploader: string;

  @Column({ nullable: true })
  gambarpenghargaan: string;
}
