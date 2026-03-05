import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDetallePedidoDto } from './dto/create-detalle_pedido.dto';
import { UpdateDetallePedidoDto } from './dto/update-detalle_pedido.dto';
import { DetallePedido } from './entities/detalle_pedido.entity';

@Injectable()
export class DetallePedidoService {
  constructor(
    @InjectRepository(DetallePedido)
    private detallePedidoRepository: Repository<DetallePedido>,
  ) {}

  async create(createDetallePedidoDto: CreateDetallePedidoDto): Promise<DetallePedido> {
    const detallePedido = this.detallePedidoRepository.create(createDetallePedidoDto);
    return this.detallePedidoRepository.save(detallePedido);
  }

  async findAll(): Promise<DetallePedido[]> {
    return this.detallePedidoRepository.find({
      order: {
        id: 'ASC',
      },
    });
  }

  async findOne(id: number): Promise<DetallePedido> {
    const detallePedido = await this.detallePedidoRepository.findOneBy({ id });
    if (!detallePedido) {
      throw new NotFoundException(`Detalle Pedido con ID ${id} no encontrado`);
    }
    return detallePedido;
  }

  async update(id: number, updateDetallePedidoDto: UpdateDetallePedidoDto): Promise<DetallePedido> {
    await this.findOne(id);
    await this.detallePedidoRepository.update(id, updateDetallePedidoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<DetallePedido> {
    const detallePedido = await this.findOne(id);
    await this.detallePedidoRepository.remove(detallePedido);
    return detallePedido;
  }
}
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDetallePedidoDto } from './dto/create-detalle_pedido.dto';
import { UpdateDetallePedidoDto } from './dto/update-detalle_pedido.dto';
import { DetallePedido } from './entities/detalle_pedido.entity';

@Injectable()
export class DetallePedidoService {
  constructor(
    @InjectRepository(DetallePedido)
    private detallePedidoRepository: Repository<DetallePedido>,
  ) {}

  async create(createDetallePedidoDto: CreateDetallePedidoDto): Promise<DetallePedido> {
    const detallePedido = this.detallePedidoRepository.create(createDetallePedidoDto);
    return this.detallePedidoRepository.save(detallePedido);
  }

  async findAll(): Promise<DetallePedido[]> {
    return this.detallePedidoRepository.find({
      relations: ['pedido', 'producto'],
      order: {
        id: 'ASC',
      },
    });
  }

  async findOne(id: number): Promise<DetallePedido> {
    const detallePedido = await this.detallePedidoRepository.findOne({
      where: { id },
      relations: ['pedido', 'producto'],
    });
    if (!detallePedido) {
      throw new NotFoundException(`Detalle Pedido con ID ${id} no encontrado`);
    }
    return detallePedido;
  }

  async update(id: number, updateDetallePedidoDto: UpdateDetallePedidoDto): Promise<DetallePedido> {
    await this.findOne(id);
    await this.detallePedidoRepository.update(id, updateDetallePedidoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<DetallePedido> {
    const detallePedido = await this.findOne(id);
    await this.detallePedidoRepository.remove(detallePedido);
    return detallePedido;
  }
}
