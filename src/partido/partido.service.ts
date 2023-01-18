import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { UpdatePartidoDto } from './dto/update-partido.dto';
import { Partido } from './entities/partido.entity';

@Injectable()
export class PartidoService {
  private partidos: Partido[] = [];

  create(createPartidoDto: CreatePartidoDto) {
    const MaxID = this.partidos[this.partidos.length - 1]?.id || 0;

    const id = MaxID + 1;

    const Partido ={
      id,
      ...createPartidoDto
    };

    this.partidos.push(Partido);

    return Partido;
  }

  findAll() {
    return this.partidos;
  }

  findOne(id: number) {
    const index = this.partidos.findIndex((Partido)=>Partido.id==id);

    return this.partidos[index];
  }

  update(id: number, updatePartidoDto: UpdatePartidoDto) {
    const selecao = this.findOne(id);

    const nova_Partido = {
      ...selecao,
      ...updatePartidoDto,
    }

    const index = this.partidos.findIndex((Partido)=>Partido.id==id);

    this.partidos[index] = nova_Partido;
    return nova_Partido;
  }

  remove(id: number) {
    const index = this.partidos.findIndex((Partido)=>Partido.id==id);

    if(index == -1){
      throw new NotFoundException(`Usuario com cpf #${id} nao achado`);
    }
    this.partidos.splice(index,1);
  }
}
