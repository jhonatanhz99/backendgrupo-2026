import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido } from './entities/pedido.entity';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,
  ) { }

  async create(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    const pedido = this.pedidoRepository.create(createPedidoDto);
    return await this.pedidoRepository.save(pedido);
  }

  async findAll(): Promise<Pedido[]> {
    return await this.pedidoRepository.find();
  }

  async findOne(id: number): Promise<Pedido> {
    const pedido = await this.pedidoRepository.findOneBy({ id });
    if (!pedido) {
      throw new NotFoundException(`Pedido with ID ${id} not found`);
    }
    return pedido;
  }

  async update(id: number, updatePedidoDto: UpdatePedidoDto): Promise<Pedido> {
    const pedido = await this.findOne(id);
    const updatedPedido = Object.assign(pedido, updatePedidoDto);
    return await this.pedidoRepository.save(updatedPedido);
  }

  async remove(id: number): Promise<void> {
    const pedido = await this.findOne(id);
    await this.pedidoRepository.remove(pedido);
  }
}
