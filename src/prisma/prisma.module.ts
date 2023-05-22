import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
//con el export hago que otros modulos puedan inyectar el PrismaService 
//si le agrego la etiqueta @Global evito tener que importar en los otros module cada vez ue quiera usrla
@Global()
@Module({
  providers: [PrismaService],
  exports:[PrismaService]
})
export class PrismaModule {}
