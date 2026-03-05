import { PartialType } from '@nestjs/mapped-types';
import { CreateDetallePedidoDto } from './create-detalle_pedido.dto';

export class UpdateDetallePedidoDto extends PartialType(CreateDetallePedidoDto) {}
