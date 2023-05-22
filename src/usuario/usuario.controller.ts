import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { AuthGuard } from '@nestjs/passport';
import { EditUsuarioDTO } from 'src/auth/dto/editUsuarioDTO';
import { SqlInjectionGuard } from 'src/auth/strategy/sqlInyeccion';

@Controller('usuario')
export class UsuarioController {


    constructor(private usuarioService: UsuarioService){}

    @Get()
    getUsuario(){
        return this.usuarioService.getUsuarios()
    }

    @Get(':id')
    getUsuarioEspecifico(@Param('id') id:string){
        return this.usuarioService.getUsuariosPorId(id)
    }

    @UseGuards(SqlInjectionGuard)
    @Patch  (':id')
    modificarUsuario(@Body() usuario:EditUsuarioDTO,@Param('id') id:string,){
        return this.usuarioService.modificarUsuario(usuario,id)
    }

}
