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
import { GestoresService } from './gestores.service';
import { CreateGestoreDto } from './dto/create-gestore.dto';
import { UpdateGestoreDto } from './dto/update-gestore.dto';

@Controller('gestores')
export class GestoresController {
  constructor(private readonly gestoresService: GestoresService) {}

  @Post()
  create(@Body() createGestoreDto: CreateGestoreDto) {
    return this.gestoresService.create(createGestoreDto);
  }

  @Get()
  findAll() {
    return this.gestoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const funcao = this.gestoresService.findOne(+id);

    if (!funcao) {
      throw new NotFoundException('Usuario não existente');
    }
    return;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGestoreDto: UpdateGestoreDto) {
    return this.gestoresService.update(+id, updateGestoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gestoresService.remove(+id);
  }
}
