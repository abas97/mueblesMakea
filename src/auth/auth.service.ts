import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Usuario } from './dto/usuarioDTO';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { LoginDTO } from './dto/loginDTO';
import { EditUsuarioDTO } from './dto/editUsuarioDTO';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { UsuarioCompras } from './dto/usuarioCompra';

@Injectable()
export class AuthService {
    constructor(private prisma:PrismaService,private jwt : JwtService, private config :ConfigService ){

    }
   
    async crearUsuario(dto:Usuario){
        
        

        try {
        const usuario = await this.prisma.usuario.create({
            data:{
                user:dto.usuario,
                password:dto.password,
                categoria:dto.categoria,
                mail:dto.mail,
                
            },
            //con el selec le digo a prisma que elementos quiero devoler cuando creo el usuario
           // select:{
             //   user:true,
               // categoria:true
           // }
           
        })
        delete usuario.password
        return usuario
        }catch(error){
        
                //esto es por si tira un error de mail duplicado
                if(error.code === 'P2002'){
                    throw new ForbiddenException('ya hay un usuario con ese mail')
                }
                else{
                    throw error
                }
            
        }
        
        
     
    }

    async login(user:LoginDTO){

        //busco por el mail al usuario 
        const usuario = await this.prisma.usuario.findUnique({
            where:{
                mail:user.mail
            }
        })
        if(!usuario) throw new ForbiddenException('no se encontro el mail')

        const contraseñaCorrecta = usuario.password === user.password

        if(!contraseñaCorrecta) throw new ForbiddenException('contraseña incorrecta')

      
        return this.generateToken(usuario.id,usuario.mail,usuario.categoria)
    }

    

 
     generateToken(id:number,mail:string, categoria:string):Promise<string>{
        const payload ={
            sub:id,
            mail,
            categoria
        }
        return   this.jwt.signAsync(payload,{
            expiresIn:'15m',
            secret:this.config.get('JWT_MAKEA')
        })
    }
}

