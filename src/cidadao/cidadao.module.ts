import { Module } from '@nestjs/common';
import { CidadaoService } from './cidadao.service';
import { CidadaoController } from './cidadao.controller';
import { Cidadao } from './cidadao.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cidadao])],
  controllers: [CidadaoController],
  providers: [CidadaoService],
})
export class CidadaoModule {}
