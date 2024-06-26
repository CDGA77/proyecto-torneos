import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, DeleteDateColumn } from 'typeorm';
import { Torneo } from './torneo.entity';

@Entity()
export class Jugador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @ManyToOne(() => Torneo, (torneo) => torneo.jugadores)
  torneo: Torneo;

  @DeleteDateColumn()
  deletedAt: Date;
}
