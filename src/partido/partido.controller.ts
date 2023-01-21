import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PartidoService } from './partido.service';
import { CreatePartidoDto } from './dto/create-partido.dto';

@Controller('partido')
export class PartidoController {
  constructor(private readonly partidoService: PartidoService) {}

  @Post()
  create(@Body() createPartidoDto: CreatePartidoDto) {
    return this.partidoService.create(createPartidoDto);
  }

  @Get()
  findAll() {
    return this.partidoService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.partidoService.remove(+id);
  }
}
