import { IsEmail, IsIn, IsNotEmpty, IsString } from "class-validator";
import { ProductoDTO } from "src/productos/dto/productoDTO";

export class UsuarioCompras{

    @IsNotEmpty({message:'Tiene que tener un type'})
    @IsIn(['Cliente','Admin'])
    @IsString()
    categoria: string;

    @IsString()
    @IsNotEmpty()
    usuario:string

    @IsNotEmpty()
    @IsEmail()
    mail:string

    @IsString()
    @IsNotEmpty()
    password:string

    
    productos:number[]


}