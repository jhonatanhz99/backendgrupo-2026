import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { CategoriaModule } from './categoria/categoria.module';
import { ProductoModule } from './producto/producto.module';
import { PedidoModule } from './pedido/pedido.module';
import { DetallePedidoModule } from './detalle_pedido/detalle_pedido.module';
import { ProductoModule } from './producto/producto.module';
import { CategoriaModule } from './categoria/categoria.module';
import { DetallePedidpModule } from './detalle-pedidp/detalle-pedidp.module';
import { ClienteModule } from './cliente/cliente.module';
import { PedidoModule } from './pedido/pedido.module';

@Module({
  imports: [ClientesModule, CategoriaModule, ProductoModule, PedidoModule, DetallePedidpModule, ClienteModule, DetallePedidoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
