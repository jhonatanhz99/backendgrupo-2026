import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido } from './entities/pedido.entity';
import { Producto } from '../producto/entities/producto.entity';
import { DetallePedido } from '../detalle_pedido/entities/detalle_pedido.entity';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private pedidoRepository: Repository<Pedido>,
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
    @InjectRepository(DetallePedido)
    private detallePedidoRepository: Repository<DetallePedido>,
  ) { }

  async create(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    const { clienteId, estado, detalles } = createPedidoDto;
    
    let total = 0;
    const detallesParaGuardar: any[] = [];

    // Validar productos y calcular total
    for (const detalle of detalles) {
      const producto = await this.productoRepository.findOne({ where: { id: detalle.productoId } });
      if (!producto) {
        throw new NotFoundException(`Producto con ID ${detalle.productoId} no encontrado`);
      }
      
      const subtotal = producto.precio * detalle.cantidad;
      total += subtotal;

      detallesParaGuardar.push({
        productoId: producto.id,
        cantidad: detalle.cantidad,
        precioUnitario: producto.precio,
        subtotal: subtotal
      });
    }

    // Crear el pedido con el total calculado
    const pedido = this.pedidoRepository.create({
      clienteId,
      estado,
      total
    });

    const pedidoGuardado = await this.pedidoRepository.save(pedido);

    // Guardar los detalles asociados al pedido
    for (const detalleData of detallesParaGuardar) {
      const detallePedido = this.detallePedidoRepository.create({
        ...detalleData,
        pedidoId: pedidoGuardado.id
      });
      await this.detallePedidoRepository.save(detallePedido);
    }

    // Devolver el pedido completo con las relaciones
    return this.findOne(pedidoGuardado.id);
  }

  async findAll(): Promise<Pedido[]> {
    return this.pedidoRepository.find({
      relations: ['cliente', 'detalles', 'detalles.producto'],
      order: {
        id: 'ASC',
      },
    });
  }

  async findOne(id: number): Promise<Pedido> {
    const pedido = await this.pedidoRepository.findOne({
      where: { id },
      relations: ['cliente', 'detalles', 'detalles.producto'],
    });
    if (!pedido) {
      throw new NotFoundException(`Pedido con ID ${id} no encontrado`);
    }
    return pedido;
  }

  async update(id: number, updatePedidoDto: UpdatePedidoDto): Promise<Pedido> {
    await this.findOne(id);
    await this.pedidoRepository.update(id, updatePedidoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<Pedido> {
    const pedido = await this.findOne(id);
    await this.pedidoRepository.remove(pedido);
    return pedido;
  }
}
