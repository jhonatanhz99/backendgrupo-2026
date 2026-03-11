import { IsNotEmpty, IsNumber, IsString, IsOptional, ValidateNested, IsArray, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class DetallePedidoDto {
  @IsNotEmpty()
  @IsNumber()
  productoId: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  cantidad: number;
}

export class CreatePedidoDto {
  @IsNotEmpty()
  @IsNumber()
  clienteId: number;

  @IsOptional()
  @IsString()
  estado?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DetallePedidoDto)
  @IsNotEmpty()
  detalles: DetallePedidoDto[];
}
