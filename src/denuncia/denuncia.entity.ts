import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Denuncia {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'date' })
  data_denuncia: Date;
  @Column({ type: 'text', length: 500 })
  texto_denuncia: string;
  @Column({ type: 'text', length: 11 })
  cpf_cidadao: string;
  @Column({ type: 'text' })
  numero_gestor: number;
}
