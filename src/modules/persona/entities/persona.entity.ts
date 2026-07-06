import { Column, Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/user.entity"; 

@Entity('personas')
export class Persona {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100 })
    nombres!: string;

    @Column({ length: 100 })
    apellidos!: string;

    @Column({ length: 15, unique: true, nullable: true })
    identificacion!: string; // Cédula, RUC o DNI para el negocio

    @Column({ length: 20, nullable: true })
    telefono!: string;

    // Estructuramos la relación 1 a 1 con el Usuario
    @OneToOne(() => User, (user) => user.persona, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' }) // Crea la llave foránea 'user_id' en la tabla personas
    user!: User;
}