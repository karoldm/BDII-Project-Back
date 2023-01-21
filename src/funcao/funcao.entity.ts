import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Funcao {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'text', length: 60 })
  titulo: string;
  @Column('number')
  mandato: number;
}
