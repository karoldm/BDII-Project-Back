import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':cpf')
  findOne(@Param('cpf') cpf: string) {
    const user = this.usuariosService.findOne(cpf);

    if (!user) {
      throw new NotFoundException('Usuario não existente');
    }
    return;
  }

  @Patch(':cpf')
  update(
    @Param('cpf') cpf: string,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    return this.usuariosService.update(cpf, updateUsuarioDto);
  }

  @Delete(':cpf')
  remove(@Param('cpf') cpf: string) {
    return this.usuariosService.remove(cpf);
  }
}
