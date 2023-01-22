import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { GestorService } from './gestor.service';
import { CreateGestorDto } from './dto/create-gestor.dto';

@Controller('gestor')
export class GestorController {
  constructor(private service: GestorService) {}

  @Get(':id')
  findOne(@Param('id') _id) {
    const gestor = this.service.findOne(_id);

    if (!gestor) {
      throw new NotFoundException('Gestor não existente');
    }

    return gestor;
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() createGestoreDto: CreateGestorDto) {
    const data_posse = new Date(createGestoreDto.data_posse);
    const data_nascimento = new Date(createGestoreDto.data_nascimento);
    const newGestor = {
      data_posse: data_posse,
      data_nascimento: data_nascimento,
      ...createGestoreDto,
    };
    return this.service.create(newGestor);
  }

  @Put(':id')
  update(@Body() updateGestorDto: CreateGestorDto, @Param('id') _id) {
    return this.service.update(updateGestorDto, _id);
  }

  @Delete(':id')
  deleteUser(@Param('id') _id) {
    return this.service.remove(_id);
  }
}
