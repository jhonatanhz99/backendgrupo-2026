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
