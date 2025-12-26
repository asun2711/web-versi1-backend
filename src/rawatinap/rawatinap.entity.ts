import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class RawatInap {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  namarawatinap: string;

  @Column()
  isirawatinap: string;

  @Column({ nullable: true })
  gambarrawatinap: string;
}
