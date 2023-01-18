import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDenunciaDto } from './dto/create-denuncia.dto';
import { UpdateDenunciaDto } from './dto/update-denuncia.dto';
import { Denuncia } from './entities/denuncia.entity';

@Injectable()
export class DenunciaService {
  private denuncias: Denuncia[] = [];

  create(createDenunciaDto: CreateDenunciaDto) {
    const MaxID = this.denuncias[this.denuncias.length - 1]?.id || 0;

    const id = MaxID + 1;

    const denuncia ={
      id,
      ...createDenunciaDto
    };

    this.denuncias.push(denuncia);

    return denuncia;
  }

  findAll() {
    return this.denuncias;
  }

  findOne(id: number) {
    const index = this.denuncias.findIndex((denuncia)=>denuncia.id==id);

    return this.denuncias[index];
  }

  update(id: number, updateDenunciaDto: UpdateDenunciaDto) {
    const selecao = this.findOne(id);

    const nova_denuncia = {
      ...selecao,
      ...updateDenunciaDto,
    }

    const index = this.denuncias.findIndex((denuncia)=>denuncia.id==id);

    this.denuncias[index] = nova_denuncia;
    return nova_denuncia;
  }

  remove(id: number) {
    const index = this.denuncias.findIndex((denuncia)=>denuncia.id==id);

    if(index == -1){
      throw new NotFoundException(`Usuario com cpf #${id} nao achado`);
    }
    this.denuncias.splice(index,1);
  }
}
