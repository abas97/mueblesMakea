import { IsEmail, IsIn, IsOptional, IsString } from "class-validator";

export class EditUsuarioDTO{
    @IsString()
    @IsOptional()
    @IsIn(['Cliente','Admin'])
    categoria?: string;

    @IsString()
    @IsOptional()
    usuario?:string

    @IsOptional()
    @IsEmail()
    mail?:string

    @IsString()
    @IsOptional()
    password?:string
}