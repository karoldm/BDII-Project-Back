import { Module } from '@nestjs/common';
import { DenunciaService } from './denuncia.service';
import { DenunciaController } from './denuncia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Denuncia } from './denuncia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Denuncia])],
  controllers: [DenunciaController],
  providers: [DenunciaService],
})
export class DenunciaModule {}
