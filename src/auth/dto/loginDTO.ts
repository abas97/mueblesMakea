import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class LoginDTO{
    @IsNotEmpty()
    @IsEmail()
    mail:string

    @IsString()
    @IsNotEmpty()
    password:string
}