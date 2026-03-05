import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './categoria/categoria.module';
import { ProductoModule } from './producto/producto.module';
import { PedidoModule } from './pedido/pedido.module';
import { DetallePedidoModule } from './detalle_pedido/detalle_pedido.module';
import { ClienteModule } from './cliente/cliente.module';

@Module({
  imports: [CategoriaModule, ProductoModule, PedidoModule, ClienteModule, DetallePedidoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
