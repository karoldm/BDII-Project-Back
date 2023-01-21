import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CreateFuncaoDto } from './dto/create-funcao.dto';
import { Funcao } from './funcao.entity';

@Injectable()
export class FuncaoService {
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  async create(createFuncaoDto: CreateFuncaoDto) {
    await this.dataSource.query(
      `INSERT INTO funcao (titulo, mandato) VALUES ('${createFuncaoDto.titulo}', ${createFuncaoDto.mandato});`,
    );
  }

  async findAll(): Promise<Funcao[]> {
    return await this.dataSource.query('SELECT * FROM funcao;');
  }

  async remove(_id: number) {
    await this.dataSource.query(`CALL del_funcao(${_id});`);
  }
}
