import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DenunciaModule } from './denuncia/denuncia.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { GestoresModule } from './gestores/gestores.module';
import { PropostasModule } from './propostas/propostas.module';
import { PartidoModule } from './partido/partido.module';
import { FuncaoModule } from './funcao/funcao.module';

@Module({
  imports: [
    DenunciaModule,
    UsuariosModule,
    GestoresModule,
    PropostasModule,
    PartidoModule,
    FuncaoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
