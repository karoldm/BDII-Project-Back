import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Partido {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'text', length: 100 })
  nome: string;
  @Column({ type: 'text', length: 10 })
  sigla: string;
}
