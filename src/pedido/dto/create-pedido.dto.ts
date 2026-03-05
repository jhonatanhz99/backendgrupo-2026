import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePedidoDto {
    @IsNumber()
    total: number;

    @IsString()
    @IsOptional()
    estado?: string;

    @IsNumber()
    @IsOptional()
    clienteId?: number;
}
import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreatePedidoDto {
  @IsNotEmpty()
  @IsNumber()
  clienteId: number;

  @IsOptional()
  @IsString()
  estado?: string;
}
