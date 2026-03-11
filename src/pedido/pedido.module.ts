import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { Pedido } from './entities/pedido.entity';
import { ClienteModule } from '../cliente/cliente.module';
import { Producto } from '../producto/entities/producto.entity';
import { DetallePedido } from '../detalle_pedido/entities/detalle_pedido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pedido, Producto, DetallePedido]), ClienteModule],
  controllers: [PedidoController],
  providers: [PedidoService],
  exports: [PedidoService],
})
export class PedidoModule { }
