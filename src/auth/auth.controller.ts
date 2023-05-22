import { Body, Controller, Get, Param, Patch, Post, Put, Req, UseGuards } from '@nestjs/common';
import { Usuario } from './dto/usuarioDTO';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/loginDTO';
import { EditUsuarioDTO } from './dto/editUsuarioDTO';
import { AuthGuard } from '@nestjs/passport';
import { SqlInjectionGuard } from './strategy/sqlInyeccion';

@Controller('auth')
export class AuthController {
    
    constructor(private authService:AuthService){}
    //TODO la logica de los usuarios deberia ir en un controllador de usuarios, mismo las compras de prosductos
    @UseGuards(SqlInjectionGuard)
    @Post()
    createUsuario(@Body() usuario:Usuario){
            return this.authService.crearUsuario(usuario)
            
    }
    @Post('/login')
    login(@Body() usuario:LoginDTO){
        return this.authService.login(usuario)
    }

   
}
