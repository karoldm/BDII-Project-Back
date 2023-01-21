import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { AppService } from './app.service';
import { AppController } from './app.controller';

import { DenunciaModule } from './denuncia/denuncia.module';
import { CidadaoModule } from './cidadao/cidadao.module';
import { GestorModule } from './gestores/gestor.module';
import { PropostasModule } from './propostas/propostas.module';
import { PartidoModule } from './partido/partido.module';
import { FuncaoModule } from './funcao/funcao.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'kdm1579',
      database: 'gestores',
      entities: [],
      logging: false,
      synchronize: false,
    }),
    DenunciaModule,
    CidadaoModule,
    GestorModule,
    PropostasModule,
    PartidoModule,
    FuncaoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
