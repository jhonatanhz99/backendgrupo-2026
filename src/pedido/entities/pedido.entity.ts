import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pedidos')
export class Pedido {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fecha: Date;

    @Column('decimal', { precision: 10, scale: 2 })
    total: number;

    @Column({ default: 'PENDIENTE' })
    estado: string;

    @Column({ type: 'int', nullable: true })
    clienteId: number;
}
