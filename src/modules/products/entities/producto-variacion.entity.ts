import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';
import { Talla } from '../../talla/entities/talla.entity';
import { Color } from '../../color/entities/color.entity';

@Entity('producto_variaciones')
export class ProductoVariacion {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ type: 'int', default: 0 })
  stock!: number; // El stock real de ESTA combinación exacta

  // Relación con el Producto base
  @ManyToOne(() => Product, (producto) => producto.variaciones, { onDelete: 'CASCADE' })
  producto!: Product;

  // Relación con la Talla
  @ManyToOne(() => Talla, (talla) => talla.variaciones, { onDelete: 'RESTRICT' })
  talla!: Talla;

  // Relación con el Color
  @ManyToOne(() => Color, (color) => color.variaciones, { onDelete: 'RESTRICT' })
  color!: Color;
}