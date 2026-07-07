import { PedidoProducto } from '../../pedido/entities/pedidoproducto.entity';
import { Categoria } from '../../categoria/entities/categoria.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductoVariacion } from './producto-variacion.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 150 })
  nombre!: string;

  @Column({ type: 'text', nullable: true })
  descripcion!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  precio!: number;

  @Column({ type: 'int', default: 0 })
  stock!: number;

  @Column({ unique: true, length: 50, nullable: true })
  codigoBarras!: string;

  // Muchos productos pertenecen a una categoría
  @ManyToOne(() => Categoria, (categoria) => categoria.products, { onDelete: 'SET NULL' })
  categoria!: Categoria;

  @OneToMany(()=>PedidoProducto,pedprod=>pedprod.producto)
  pedidoProducto!: PedidoProducto[]

  @OneToMany(() => ProductoVariacion, (variacion) => variacion.producto)
  variaciones!: ProductoVariacion[];
}