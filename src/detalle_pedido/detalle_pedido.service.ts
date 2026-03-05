import { Injectable } from '@nestjs/common';
import { CreateDetallePedidoDto } from './dto/create-detalle_pedido.dto';
import { UpdateDetallePedidoDto } from './dto/update-detalle_pedido.dto';

@Injectable()
export class DetallePedidoService {
  create(createDetallePedidoDto: CreateDetallePedidoDto) {
    return 'This action adds a new detallePedido';
  }

  findAll() {
    return `This action returns all detallePedido`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detallePedido`;
  }

  update(id: number, updateDetallePedidoDto: UpdateDetallePedidoDto) {
    return `This action updates a #${id} detallePedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} detallePedido`;
  }
}
