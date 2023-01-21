import { Controller, Get, Post, Body } from '@nestjs/common';
import { DenunciaService } from './denuncia.service';
import { CreateDenunciaDto } from './dto/create-denuncia.dto';

@Controller('denuncia')
export class DenunciaController {
  constructor(private readonly denunciaService: DenunciaService) {}

  @Post()
  create(@Body() createDenunciaDto: CreateDenunciaDto) {
    const date = new Date(createDenunciaDto.data_denuncia);
    const newDenuncia = { data_denuncia: date, ...createDenunciaDto };
    return this.denunciaService.create(newDenuncia);
  }

  @Get()
  findAll() {
    return this.denunciaService.findAll();
  }
}
