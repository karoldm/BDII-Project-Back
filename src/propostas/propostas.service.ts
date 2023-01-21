import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreatePropostaDto } from './dto/create-proposta.dto';
import { Proposta } from './proposta.entity';

@Injectable()
export class PropostasService {
  constructor(@InjectDataSource() private readonly dataSourte: DataSource) {}

  async create(createPropostaDto: CreatePropostaDto) {
    await this.dataSourte.query(`CALL insere_Proposta(
      '${createPropostaDto.titulo}',
      '${createPropostaDto.descricao}',
      '${createPropostaDto.data_aprovacao}',
      ${createPropostaDto.numero_gestor}
    );`);
  }

  async findAll(): Promise<Proposta[]> {
    return await this.dataSourte.query('SELECT * FROM propostas_aprovadas;');
  }

  async remove(_id: number) {
    this.dataSourte.query(
      `DELETE FROM propostas_aprovadas WHERE numero=${_id};`,
    );
  }
}
