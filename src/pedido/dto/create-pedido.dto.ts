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
