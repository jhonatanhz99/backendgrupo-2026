import { IsNotEmpty, IsString, IsOptional, IsNumber, IsPositive, MaxLength, MinLength, Min } from 'class-validator';

export class CreateProductoDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(150)
  nombre: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  descripcion?: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  precio: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  stock: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  categoriaId: number;
}
