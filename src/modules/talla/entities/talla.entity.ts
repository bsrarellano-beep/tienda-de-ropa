import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductoVariacion } from '../../products/entities/producto-variacion.entity';

@Entity('tallas')
export class Talla {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ type: 'varchar', length: 10, unique: true })
  nombre!: string; // Ej: 'S', 'M', 'L', '38', '40'

  @OneToMany(() => ProductoVariacion, (variacion) => variacion.talla)
  variaciones!: ProductoVariacion[];
}