import { IsIn, IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class ProductoDTO {
  @IsNotEmpty({message:'Tiene que tener un type'})
  @IsIn(['Mueble','Comida','Hogar'])
  @IsString()
  type: string;

  @IsNotEmpty({message:'Tiene que tener un nombre'})
  @IsString()
  nombre: string;

  @IsNotEmpty({message:'La descripcion no puede estar vacia'})
  @IsString()
  descripcion: string;

  @IsNotEmpty({message:'Tiene que tener un precio'})
  @IsInt({ message: 'El precio debe de ser un número entero' })
  @Min(1, { message: 'El stock debe ser 1 o más'})
  precio: number;

  @IsNotEmpty({message:'Tiene que tener el stock'})
  @IsInt({ message: 'El stock debe de ser un número entero' })
  @Min(0, { message: 'El stock debe ser 0 o más'})
  stock: number;

  @IsNotEmpty({message:'Tiene que tener un nombre'})
  @IsString()
  img: string




}
