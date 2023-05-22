import { IsIn, IsInt,IsOptional,IsString, Min } from 'class-validator';

export class ModificarProductoDTO {
  @IsIn(['Mueble','Comida','Hogar'])
  @IsString()
  @IsOptional()
  type?: string;

  @IsString()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsInt({ message: 'El precio debe de ser un número entero' })
  @Min(1, { message: 'El stock debe ser 1 o más'})
  @IsOptional()
  precio?: number;

  @IsInt({ message: 'El stock debe de ser un número entero' })
  @Min(0, { message: 'El stock debe ser 0 o más'})
  @IsOptional()
  stock?: number;

  @IsOptional()
  @IsString()
  img: string

}
