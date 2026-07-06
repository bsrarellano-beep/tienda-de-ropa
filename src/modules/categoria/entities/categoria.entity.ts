import { Product } from '../../products/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categorias')
export class Categoria {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true, length: 100 })
  nombre!: string;

  @Column({ length: 255, nullable: true })
  descripcion!: string;

  // Una categoría tiene muchos productos
  @OneToMany(() => Product, (product) => product.categoria)
  products!: Product[];
}