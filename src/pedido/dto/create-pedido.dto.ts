import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreatePedidoDto {
  @IsNotEmpty()
  @IsNumber()
  clienteId: number;

  @IsOptional()
  @IsString()
  estado?: string;
}
