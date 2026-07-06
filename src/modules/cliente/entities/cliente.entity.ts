import { Pedido } from '../../pedido/entities/pedido.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ type: 'varchar', length: 150 })
  nombre_completo!: string;

  @Column({ type: 'varchar', length: 20, unique: true })
  dni!: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  telefono!: string;

  // Un cliente tiene muchos pedidos
  @OneToMany(() => Pedido, (pedido) => pedido.cliente)
  pedidos!: Pedido[];
}