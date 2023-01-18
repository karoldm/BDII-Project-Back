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
import { PartidoService } from './partido.service';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { UpdatePartidoDto } from './dto/update-partido.dto';

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

  @Get(':id')
  findOne(@Param('id') id: string) {
    const funcao = this.partidoService.findOne(+id);

    if (!funcao) {
      throw new NotFoundException('Usuario não existente');
    }
    return;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePartidoDto: UpdatePartidoDto) {
    return this.partidoService.update(+id, updatePartidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partidoService.remove(+id);
  }
}
