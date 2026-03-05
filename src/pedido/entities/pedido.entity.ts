import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Cliente } from '../../cliente/entities/cliente.entity';
import { DetallePedido } from '../../detalle_pedido/entities/detalle_pedido.entity';

@Entity('pedidos')
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  clienteId: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  total: number;

  @Column({ type: 'varchar', length: 50, default: 'pendiente' })
  estado: string;

  @CreateDateColumn()
  fechaCreacion: Date;

  @UpdateDateColumn()
  fechaActualizacion: Date;

  @ManyToOne(() => Cliente, (cliente) => cliente.pedidos)
  cliente: Cliente;

  @OneToMany(() => DetallePedido, (detallePedido) => detallePedido.pedido)
  detalles: DetallePedido[];
}
