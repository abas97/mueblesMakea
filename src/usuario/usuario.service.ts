import { ForbiddenException, Injectable } from '@nestjs/common';
import { EditUsuarioDTO } from 'src/auth/dto/editUsuarioDTO';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuarioService {
    constructor(private prisma:PrismaService ){}


    async getUsuarios(){
        const usuarios = await this.prisma.usuario.findMany()
       
        return usuarios.map(user => {
            delete user.password
            return user
        })
    }
    async modificarUsuario(datos:EditUsuarioDTO,id:string){
        const usuario = await this.prisma.usuario.update({
            where:{
                id: parseInt(id)
            },
            data:{
                ...datos
            }
        })
        delete  usuario.password
        return usuario
    }

    async getUsuariosPorId(idUsuario:string){
        const usuarioVAlid = await this.prisma.usuario.findFirst({
            where:{
                id:parseInt(idUsuario)
            }
        })

        if(!usuarioVAlid) throw new ForbiddenException(`No se encontro el usuario ${idUsuario}`)

        const productosUsuario = await this.prisma.producto.findMany({ where: { id: { in: usuarioVAlid.productos } } })
        delete usuarioVAlid.password
        delete usuarioVAlid.productos
        return {...usuarioVAlid,productosUsuario}
    }
}
