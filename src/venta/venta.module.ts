import { Module } from '@nestjs/common';
import { VentaService } from './venta.service';
import { VentaController } from './venta.controller';
import { ProductosService } from 'src/productos/productos.service';

@Module({
  providers: [VentaService,ProductosService],
  controllers: [VentaController]
})
export class VentaModule {}
