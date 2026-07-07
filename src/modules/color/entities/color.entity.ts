import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductoVariacion } from '../../products/entities/producto-variacion.entity';

@Entity('colores')
export class Color {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  nombre!: string; // Ej: 'Negro', 'Blanco', 'Rojo'

  @Column({ type: 'varchar', length: 7, nullable: true })
  codigo_hex!: string; // Opcional por si quiere mostrar el círculo de color en la web (Ej: '#000000')

  @OneToMany(() => ProductoVariacion, (variacion) => variacion.color)
  variaciones!: ProductoVariacion[];
}