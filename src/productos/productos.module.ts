import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
import { SqlInjectionGuard } from 'src/auth/strategy/sqlInyeccion';

@Module({
  imports:[JwtModule.register({})],
  controllers: [ProductosController],
  providers: [ProductosService,SqlInjectionGuard]
})
export class ProductosModule {}
