
import { IsEmail, IsIn, IsNotEmpty, IsString } from "class-validator";

export class VentaDTO{

    @IsNotEmpty({message:'Tiene que tener una direccion de entrega'})
    @IsString()
    direccion:string

   
    
    @IsNotEmpty({message:'falta el id del producto'})
    productos:number[]

    @IsNotEmpty()
    @IsString({message:'se necesita el nombre del comprador'})
    comprador:string

   
    entrega:boolean

    
    


}