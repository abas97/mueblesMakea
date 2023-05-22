import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { VentaModule } from './venta/venta.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [ProductosModule, VentaModule, PrismaModule, AuthModule,ConfigModule.forRoot({
    isGlobal:true
  }), UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
