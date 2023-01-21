import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { Partido } from './partido.entity';

@Injectable()
export class PartidoService {
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  async create(createPartidoDto: CreatePartidoDto) {
    await this.dataSource.query(
      `INSERT INTO partido (nome, sigla) VALUES ('${createPartidoDto.nome}', '${createPartidoDto.sigla}');`,
    );
  }

  async findAll(): Promise<Partido[]> {
    return await this.dataSource.query('SELECT * FROM partido;');
  }

  async remove(_id: number) {
    this.dataSource.query(`CALL del_partido(${_id});`);
  }
}
