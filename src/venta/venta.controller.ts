import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { VentaService } from './venta.service';
import { VentaDTO } from './dto/ventaDTO';

@Controller('venta')
export class VentaController {
    constructor(private ordenService:VentaService){}
    @Get()
    getOrdenesSinEntregar(){
        return this.ordenService.ordenesEnPRoceso()
    }

    @Post()
    crearOrden(@Body() orden:VentaDTO){
        return this.ordenService.crearOrden(orden)
    }

    @Patch(':id')
    ordenEntregada(@Param('id') id:string){
        return this.ordenService.ordenEntregada(id)
    }
}
