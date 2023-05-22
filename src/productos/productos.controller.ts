import { Body, Controller, Get, Param, Patch, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProductoDTO } from 'src/productos/dto/productoDTO';
import { ProductosService } from './productos.service';
import { ModificarProductoDTO } from 'src/productos/dto/modificarProductoDTO';
import { SqlInjectionGuard } from 'src/auth/strategy/sqlInyeccion';


@Controller('productos')
export class ProductosController {
    constructor(private prductoService:ProductosService){}
    
    @Get()
    getProductos(){
        return this.prductoService.getProductos(    )
    }

    //agregar modificar producto
    @UseGuards(SqlInjectionGuard)
    @Patch(':id')
    modificarProducto(@Body() dto:ModificarProductoDTO,@Param('id') id:string){
        return this.prductoService.modificarProducto(dto,id)
    }
    //eliminar
    @UseGuards(SqlInjectionGuard)
    @Patch('/compra/:id')
    comprar(@Param('id') id:string,@Request() req  ){
        return this.prductoService.comprarUnProducto(id)
    }

    
    @Post()
    crearProducto(@Body() dto:ProductoDTO){
        return this.prductoService.crearProducto(dto)
    }
}
