import { Injectable,NotFoundException } from '@nestjs/common';
import { CreatePropostaDto } from './dto/create-proposta.dto';
import { UpdatePropostaDto } from './dto/update-proposta.dto';
import { Proposta } from './entities/proposta.entity';

@Injectable()
export class PropostasService {
  private propostas: Proposta[] = [];
  create(createPropostaDto: CreatePropostaDto) {
    const Proposta ={
      ...createPropostaDto
    };

    this.propostas.push(Proposta);

    return Proposta;
  }

  findAll() {
    return this.propostas;
  }

  findOne(id: number) {
    const index = this.propostas.findIndex((Proposta)=>Proposta.numero==id);

    return this.propostas[index];
  }

  update(id: number, updatePropostaDto: UpdatePropostaDto) {
    const selecao = this.findOne(id);

    const nova_Proposta = {
      ...selecao,
      ...updatePropostaDto,
    }

    const index = this.propostas.findIndex((Proposta)=>Proposta.numero==id);

    this.propostas[index] = nova_Proposta;
    return nova_Proposta;
  }

  remove(id: number) {
    const index = this.propostas.findIndex((Proposta)=>Proposta.numero==id);

    if(index == -1){
      throw new NotFoundException(`Usuario com cpf #${id} nao achado`);
    }
    this.propostas.splice(index,1);
  }
}
