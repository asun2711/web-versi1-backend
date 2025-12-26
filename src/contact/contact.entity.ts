import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @Column()
  telepon: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  subjek: string;

  @Column()
  pesan: string;
}
