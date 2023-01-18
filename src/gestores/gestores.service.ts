import { Injectable,NotFoundException } from '@nestjs/common';
import { CreateGestoreDto } from './dto/create-gestore.dto';
import { UpdateGestoreDto } from './dto/update-gestore.dto';
import { Gestore } from './entities/gestore.entity';

@Injectable()
export class GestoresService {
  private gestores: Gestore[] = [];
  create(createGestoreDto: CreateGestoreDto) {
    const MaxID = this.gestores[this.gestores.length - 1]?.id || 0;

    const id = MaxID + 1;

    const Gestore ={
      id,
      ...createGestoreDto
    };

    this.gestores.push(Gestore);

    return Gestore;
  }

  findAll() {
    return this.gestores;
  }

  findOne(id: number) {
    const index = this.gestores.findIndex((Gestore)=>Gestore.id==id);

    return this.gestores[index];
  }

  update(id: number, updateGestoreDto: UpdateGestoreDto) {
    const selecao = this.findOne(id);

    const nova_Gestore = {
      ...selecao,
      ...updateGestoreDto,
    }

    const index = this.gestores.findIndex((Gestore)=>Gestore.id==id);

    this.gestores[index] = nova_Gestore;
    return nova_Gestore;
  }

  remove(id: number) {
    const index = this.gestores.findIndex((Gestore)=>Gestore.id==id);

    if(index == -1){
      throw new NotFoundException(`Usuario com cpf #${id} nao achado`);
    }
    this.gestores.splice(index,1);
  }
}
