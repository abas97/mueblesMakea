import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { SqlInjectionGuard } from 'src/auth/strategy/sqlInyeccion';

@Module({
  providers: [UsuarioService,SqlInjectionGuard],
  controllers: [UsuarioController]
})
export class UsuarioModule {}
