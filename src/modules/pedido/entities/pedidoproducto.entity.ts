import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Pedido } from './pedido.entity';
import { Product } from '../../products/entities/product.entity'; // Ajusta la ruta a tu entidad Producto

@Entity('pedido_productos')
export class PedidoProducto {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ type: 'int' })
  cantidad!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio_unitario!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  subtotal!: number;

  // Relación con la cabecera del Pedido
  @ManyToOne(() => Pedido, { onDelete: 'CASCADE' })
  pedido!: Pedido;

  // Relación con el Producto seleccionado
  @ManyToOne(() => Product, { onDelete: 'RESTRICT' }) 
  // RESTRICT evita que borren un producto si ya se vendió en un pedido (por auditoría)
  producto!: Product;
}