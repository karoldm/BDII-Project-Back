import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cidadao {
  @PrimaryGeneratedColumn()
  cpf: string;
  @Column({ type: 'text', length: 60 })
  nome_completo: string;
  @Column({ type: 'date' })
  data_nascimento: Date;
  @Column({ type: 'text', length: 50 })
  rua: string;
  @Column({ type: 'text', length: 50 })
  bairro: string;
  @Column({ type: 'text', length: 50 })
  cidade: string;
  @Column({ type: 'text', length: 2 })
  uf: string;
  @Column({ type: 'number' })
  nro: number;
  @Column({ type: 'text' })
  email: string;
  @Column({ type: 'text' })
  senha: string;
}
