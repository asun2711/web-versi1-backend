import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Laboratorium {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  namalaboratorium: string;

  @Column()
  isilaboratorium: string;

  @Column({ nullable: true })
  gambarlaboratorium: string;
}
