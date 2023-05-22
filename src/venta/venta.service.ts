import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { VentaDTO } from './dto/ventaDTO';
import { ProductosService } from 'src/productos/productos.service';

@Injectable()
export class VentaService {

    constructor(private prisma:PrismaService,private producto:ProductosService){}

    async crearOrden(orden:VentaDTO){
        const ordenCreada = await this.prisma.ordenDeCompra.create({
            data:{
                direccion:orden.direccion,
                comprador:orden.comprador,
                productos:orden.productos,
                entragada:false
            }
        })
        const seHizoCompra=await this.producto.comprarUnProducto(orden.productos[0].toString())
        if(!seHizoCompra) throw new ForbiddenException('error de compra')
        const productos = await this.prisma.producto.findMany({ where: { id: { in: orden.productos } } })
        delete ordenCreada.productos
        return {...ordenCreada,productos}
    }

    async ordenesEnPRoceso(){
        return await this.prisma.ordenDeCompra.findMany({
            where:{
                entragada:false
            }
        })
    }

    async ordenEntregada(ordenId:string){

        const orden=  await this.prisma.ordenDeCompra.update({
            where:{
                id:parseInt(ordenId)
            },
            data:{
                entragada:true
            }
        })

        const productos = await this.prisma.producto.findMany({ where: { id: { in: orden.productos } } })

        delete orden.productos

          return {...orden,productos:productos}
    }

}
