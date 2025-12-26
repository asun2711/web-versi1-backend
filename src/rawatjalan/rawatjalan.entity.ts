import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class RawatJalan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  namarawatjalan: string;

  @Column()
  isirawatjalan: string;

  @Column({ nullable: true })
  gambarrawatjalan: string;
}
