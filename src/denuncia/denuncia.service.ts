import { Injectable } from '@nestjs/common';
import { CreateDenunciaDto } from './dto/create-denuncia.dto';
import { Denuncia } from './denuncia.entity';
import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';

@Injectable()
export class DenunciaService {
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  async findAll(): Promise<Denuncia[]> {
    return await this.dataSource.query('SELECT * FROM DENUNCIA;');
  }

  async create(createDenunciaDto: CreateDenunciaDto) {
    await this.dataSource.query(
      `INSERT INTO DENUNCIA (data_denuncia, texto_denuncia, cpf_cidadao, numero_gestor) VALUES (
        '${createDenunciaDto.data_denuncia}', 
        '${createDenunciaDto.texto_denuncia}', 
        '${createDenunciaDto.cpf_cidadao}', 
        ${createDenunciaDto.numero_gestor});`,
    );
  }
}
