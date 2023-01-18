import { Module } from '@nestjs/common';
import { GestoresService } from './gestores.service';
import { GestoresController } from './gestores.controller';

@Module({
  controllers: [GestoresController],
  providers: [GestoresService],
})
export class GestoresModule {}
