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
import { DenunciaService } from './denuncia.service';
import { CreateDenunciaDto } from './dto/create-denuncia.dto';
import { UpdateDenunciaDto } from './dto/update-denuncia.dto';

@Controller('denuncia')
export class DenunciaController {
  constructor(private readonly denunciaService: DenunciaService) {}

  @Post()
  create(@Body() createDenunciaDto: CreateDenunciaDto) {
    return this.denunciaService.create(createDenunciaDto);
  }

  @Get()
  findAll() {
    return this.denunciaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const funcao = this.denunciaService.findOne(+id);

    if (!funcao) {
      throw new NotFoundException('Usuario não existente');
    }
    return;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDenunciaDto: UpdateDenunciaDto,
  ) {
    return this.denunciaService.update(+id, updateDenunciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.denunciaService.remove(+id);
  }
}
