import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { FuncaoService } from './funcao.service';
import { CreateFuncaoDto } from './dto/create-funcao.dto';

@Controller('funcao')
export class FuncaoController {
  constructor(private readonly funcaoService: FuncaoService) {}

  @Post()
  create(@Body() createFuncaoDto: CreateFuncaoDto) {
    return this.funcaoService.create(createFuncaoDto);
  }

  @Get()
  findAll() {
    return this.funcaoService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') _id: number) {
    return this.funcaoService.remove(_id);
  }
}
