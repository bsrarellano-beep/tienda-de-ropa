import { Cliente } from '../../cliente/entities/cliente.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { PedidoProducto } from './pedidoproducto.entity';

@Entity('pedidos')
export class Pedido {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @CreateDateColumn({ type: 'timestamp' })
  fecha!: Date;

  @Column({ type: 'varchar', length: 50, default: 'PENDIENTE' })
  estado!: string;

  @Column({ type: 'text', nullable: true })
  observaciones!: string;

  // Muchos pedidos pertenecen a un solo cliente
  @ManyToOne(() => Cliente, (cliente) => cliente.pedidos, { onDelete: 'CASCADE' })
  cliente!: Cliente;

  @OneToMany(()=> PedidoProducto,pedprod=>pedprod.pedido)
  pedidoProducto!: PedidoProducto[];
}