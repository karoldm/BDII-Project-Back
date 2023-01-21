import { Module } from '@nestjs/common';
import { FuncaoService } from './funcao.service';
import { FuncaoController } from './funcao.controller';
import { Funcao } from './funcao.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Funcao])],
  controllers: [FuncaoController],
  providers: [FuncaoService],
})
export class FuncaoModule {}
