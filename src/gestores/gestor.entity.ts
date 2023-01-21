import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Gestor {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('date')
  data_posse: Date;
  @Column('date')
  data_nascimento: Date;
  @Column('text')
  foto: string;
  @Column('text')
  nome_completo: string;
  @Column('number')
  id_funcao: number;
  @Column('number')
  id_partido: number;
}
