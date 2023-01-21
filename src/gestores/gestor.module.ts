import { Module } from '@nestjs/common';
import { GestorService } from './gestor.service';
import { GestorController } from './gestor.controller';
import { Gestor } from './gestor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Gestor])],
  controllers: [GestorController],
  providers: [GestorService],
})
export class GestorModule {}
