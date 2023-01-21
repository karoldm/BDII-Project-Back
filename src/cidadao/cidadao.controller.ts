import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { Cidadao } from './cidadao.entity';
import { CidadaoService } from './cidadao.service';
import { CreateCidadaoDto } from './dto/create-cidadao.dto';

@Controller('cidadao')
export class CidadaoController {
  constructor(private readonly cidadaoService: CidadaoService) {}

  @Post()
  create(@Body() createCidadaoDto: CreateCidadaoDto) {
    const date = new Date(createCidadaoDto.data_nascimento);
    const newCidadao = { data_nascimento: date, ...createCidadaoDto };
    return this.cidadaoService.create(newCidadao);
  }

  @Get()
  findAll() {
    return this.cidadaoService.findAll();
  }

  @Get(':cpf')
  findOne(@Param('cpf') _cpf): Promise<Cidadao> {
    const cidadao = this.cidadaoService.findOne(_cpf);

    if (!cidadao) {
      throw new NotFoundException('Cidadao não existente');
    }
    return cidadao;
  }

  @Delete(':cpf')
  remove(@Param('cpf') _cpf: string) {
    return this.cidadaoService.remove(_cpf);
  }
}
