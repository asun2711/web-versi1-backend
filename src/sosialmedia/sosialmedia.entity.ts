import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SosialMedia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  namasosialmedia: string;

  @Column({ nullable: true })
  username: string;

  @Column({ nullable: true })
  link: string;

  @Column({ nullable: true })
  iconsosialmedia: string; // sesuai input <template>
}
