import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CreateGestorDto } from './dto/create-gestor.dto';
import { UpdateGestorDto } from './dto/update-gestor.dto';
import { Gestor } from './gestor.entity';

@Injectable()
export class GestorService {
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  async create(createGestorDto: CreateGestorDto) {
    await this.dataSource.query(
      `INSERT INTO gestor (data_posse, data_nascimento, foto, nome_completo, id_funcao, id_partido) 
      VALUES(
        '${createGestorDto.data_posse}', 
        '${createGestorDto.data_nascimento}', 
        '${createGestorDto.foto}', 
        '${createGestorDto.nome_completo}',
        ${createGestorDto.id_funcao},
        ${createGestorDto.id_partido});`,
    );
  }

  async findAll(): Promise<Gestor[]> {
    return await this.dataSource.query('SELECT * FROM gestor;');
  }

  async findOne(_id: number): Promise<Gestor> {
    const gestor = await this.dataSource.query(
      `SELECT * FROM gestor WHERE numero=${_id}`,
    );
    return gestor[0];
  }

  async update(updateGestorDto: UpdateGestorDto) {
    await this.dataSource.query(`UPDATE gestor SET 
    data_posse='${updateGestorDto.data_posse}', 
    data_nascimento='${updateGestorDto.data_nascimento}',
    foto='${updateGestorDto.foto}',
    nome_completo='${updateGestorDto.nome_completo}',
    id_funcao=${updateGestorDto.id_funcao},
    id_partido=${updateGestorDto.id_partido};`);
  }

  async remove(_id: number) {
    this.dataSource.query(`CALL del_gestor(${_id});`);
  }
}
