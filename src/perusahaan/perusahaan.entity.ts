import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'perusahaan' })
export class Perusahaan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  namaperusahaan: string;

  @Column({ type: 'text' })
  alamatperusahaan: string;

  @Column({ type: 'varchar', length: 20 })
  teleponumum: string;

  @Column({ type: 'varchar', length: 20 })
  telepondarurat: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'text' })
  lokasi: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  logoperusahaan: string | null;
}
