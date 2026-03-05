import { IsString, IsNotEmpty, IsNumber, IsOptional, Min, IsPositive } from 'class-validator';

export class CreateProductoDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsOptional()
    descripcion?: string;

    @IsNumber()
    @IsPositive()
    precio: number;

    @IsNumber()
    @Min(0)
    @IsOptional()
    stock?: number;
}
