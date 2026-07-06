import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { OneToOne } from 'typeorm';
import { Persona } from '../../persona/entities/persona.entity';
import { Role } from '../../role/entities/role.entity';
import { ManyToMany, JoinTable } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  nombre!: string;

  @Column({ unique: true, length: 150 })
  email!: string;

  @Column({ select: false }) // Evita que la contraseña se filtre en las consultas por defecto
  password!: string;

  @Column({ default: 'empleado' }) // 'admin' o 'empleado' para el negocio pequeño
  rol!: string;

  @Column({ default: true })
  isActive!: boolean;

  @Column({ nullable: true })
  telefono!:string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
  // No olvides importar OneToOne desde 'typeorm' y la entidad Persona arriba
  @OneToOne(() => Persona, (persona) => persona.user)
  persona!: Persona;

  @ManyToMany(() => Role, (role) => role.users, { eager: true })
  @JoinTable({ name: 'user_roles' }) // Esto crea automáticamente la tabla intermedia
  roles!: Role[];
}