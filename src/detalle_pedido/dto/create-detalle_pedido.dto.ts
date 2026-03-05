export class CreateDetallePedidoDto {
  pedidoId: number;
  productoId: number;
  cantidad: number;
  precioUnitario: number;
  subtotal: number;
}
import { IsNotEmpty, IsNumber, IsPositive, Min } from 'class-validator';

export class CreateDetallePedidoDto {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  pedidoId: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  productoId: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  cantidad: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  precioUnitario: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  subtotal: number;
}
