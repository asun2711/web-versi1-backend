import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Spesialis } from '../spesialis/spesialis.entity'; // path sesuaikan

@Entity()
export class Dokter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  namadokter: string;

  @Column()
  gelardokter: string;

  @Column()
  jadwaldokter: string;

  @Column()
  sertifikatstrdokter: string;

  @Column()
  sertifikatsipdokter: string;

  @Column({ nullable: true })
  gambardokter: string;

  // Relasi ke Spesialis
  @ManyToOne(() => Spesialis, { eager: true, nullable: true }) // eager agar spesislis otomatis dimuat
  @JoinColumn({ name: 'spesialisId' }) // Nama kolom FK di tabel dokter
  spesialis?: Spesialis;

  @Column({ nullable: true })
  spesialisId: number; // FK kolom ke spesialis
}
