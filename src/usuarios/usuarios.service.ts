import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  private users: Usuario[] = [];

  create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = {
      ...createUsuarioDto,
    };

    this.users.push(usuario);
    return usuario;
  }

  findAll() {
    return this.users;
  }

  findOne(cpf: string) {
    const index = this.users.findIndex((Usuario) => Usuario.cpf == cpf);

    return this.users[index];
  }

  update(cpf: string, updateUsuarioDto: UpdateUsuarioDto) {
    const selecao = this.findOne(cpf);

    const novo_usuario = {
      ...selecao,
      ...updateUsuarioDto,
    };

    const index = this.users.findIndex((Usuario) => Usuario.cpf == cpf);

    this.users[index] = novo_usuario;
    return novo_usuario;
  }

  remove(cpf: string) {
    const index = this.users.findIndex((Usuario) => Usuario.cpf == cpf);

    if (index == -1) {
      throw new NotFoundException(`Usuario com cpf #${cpf} nao achado`);
    }
    this.users.splice(index, 1);
    return;
  }
}
