import { Injectable } from '@nestjs/common';
import { InjectRepository, InjectDataSource } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CreateCidadaoDto } from './dto/create-cidadao.dto';
import { Cidadao } from './cidadao.entity';

@Injectable()
export class CidadaoService {
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  async create(createCidadaoDto: CreateCidadaoDto) {
    return await this.dataSource.query(
      `CALL insere_Cidadao(
        '${createCidadaoDto.cpf}', 
        '${createCidadaoDto.nome_completo}', 
        '${createCidadaoDto.data_nascimento}', 
        '${createCidadaoDto.rua}', 
        '${createCidadaoDto.bairro}',
        '${createCidadaoDto.cidade}',
        '${createCidadaoDto.uf}',
        ${createCidadaoDto.nro},
        '${createCidadaoDto.email}',
        '${createCidadaoDto.senha}'
      );`,
    );
  }

  async findAll(): Promise<Cidadao[]> {
    return await this.dataSource.query('SELECT * FROM cidadao;');
  }

  async findOne(_cpf: string): Promise<Cidadao> {
    const cidadao = await this.dataSource.query(
      `SELECT * FROM cidadao WHERE cpf=${_cpf};`,
    );
    return cidadao[0];
  }

  async remove(_cpf: string) {
    this.dataSource.query(`DELETE FROM cidadao WHERE cpf=${_cpf};`);
  }
}
