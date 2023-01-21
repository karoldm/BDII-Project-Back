import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PropostasService } from './propostas.service';
import { CreatePropostaDto } from './dto/create-proposta.dto';

@Controller('propostas')
export class PropostasController {
  constructor(private readonly propostasService: PropostasService) {}

  @Post()
  create(@Body() createPropostaDto: CreatePropostaDto) {
    const date = new Date(createPropostaDto.data_aprovacao);
    const newProposta = { data_aprovacao: date, ...createPropostaDto };
    console.log(newProposta);
    return this.propostasService.create(newProposta);
  }

  @Get()
  findAll() {
    return this.propostasService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') _id: number) {
    return this.propostasService.remove(_id);
  }
}
