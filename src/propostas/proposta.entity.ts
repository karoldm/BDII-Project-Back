import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Proposta {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'text', length: 100 })
  titulo: string;
  @Column({ type: 'text', length: 500 })
  descricao: string;
  @Column({ type: 'date' })
  data_aprovacao: Date;
  @Column('number')
  numero_gestor: number;
}
