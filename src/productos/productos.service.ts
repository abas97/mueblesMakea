import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductoDTO } from './dto/productoDTO';
import { AuthService } from 'src/auth/auth.service';
import { ModificarProductoDTO } from './dto/modificarProductoDTO';


@Injectable()
export class ProductosService {
    constructor(private prisma: PrismaService){}

    async comprarUnProducto(idProducto:string){
       
        const producto = await this.prisma.producto.findFirst({
            where:{
                id:parseInt(idProducto)
            }
        }).then(productoValido =>{
        if(!productoValido) throw new ForbiddenException('no se encontro el producto')

        if(productoValido.stock==0) throw new ForbiddenException('no hay mas stock del producto')
        return  this.prisma.producto.update({
            where:{
                id:productoValido.id
            },
            data:{
                stock:productoValido.stock-1
            }
        })
        }
        )

        

       
        return producto

    }

    async crearProducto(producto:ProductoDTO){
            const productoCreado = await this.prisma.producto.create({
                data:{
                    type:producto.type,
                    nombre:producto.nombre,
                    descripcion:producto.descripcion,
                    precio:producto.precio,
                    stock:producto.stock,
                    img: producto.img
                }
            })
            return productoCreado
    }

    async getProductos(){
        return await this.prisma.producto.findMany({
            where:{
                stock:{
                    gt:0
                }
            }
        })
    }

    async modificarProducto(dto:ModificarProductoDTO,id:string){
        const producto = await this.prisma.producto.update({
            where:{
                id:parseInt(id)
            },
            data:{
                ...dto
            }
        })
        return producto
    }
}
