import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFuncaoDto } from './dto/create-funcao.dto';
import { UpdateFuncaoDto } from './dto/update-funcao.dto';
import { Funcao } from './entities/funcao.entity';

@Injectable()
export class FuncaoService {
  private funcoes: Funcao[] = [];

  create(createFuncaoDto: CreateFuncaoDto) {
    const MaxID = this.funcoes[this.funcoes.length - 1]?.id || 0;

    const id = MaxID + 1;

    const funcao = {
      id,
      ...createFuncaoDto,
    };

    this.funcoes.push(funcao);

    return funcao;
  }

  findAll() {
    return this.funcoes;
  }

  findOne(id: number) {
    const index = this.funcoes.findIndex((Funcao) => Funcao.id == id);

    return this.funcoes[index];
  }

  update(id: number, updateFuncaoDto: UpdateFuncaoDto) {
    const selecao = this.findOne(id);

    const nova_funcao = {
      ...selecao,
      ...updateFuncaoDto,
    };

    const index = this.funcoes.findIndex((Funcao) => Funcao.id == id);

    this.funcoes[index] = nova_funcao;
    return nova_funcao;
  }

  remove(id: number) {
    const index = this.funcoes.findIndex((Funcao) => Funcao.id == id);

    if (index == -1) {
      throw new NotFoundException(`Usuario com cpf #${id} nao achado`);
    }
    this.funcoes.splice(index, 1);
  }
}
