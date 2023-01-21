import { Module } from '@nestjs/common';
import { PropostasService } from './propostas.service';
import { PropostasController } from './propostas.controller';
import { Proposta } from './proposta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Proposta])],
  controllers: [PropostasController],
  providers: [PropostasService],
})
export class PropostasModule {}
