// resultado.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Torneo } from './torneo.entity';

@Entity()
export class Resultado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ganador: number; // id del jugador ganador

  @Column()
  perdedor: number; // id del jugador perdedor

  @Column()
  puntajeGanador: number;

  @Column()
  puntajePerdedor: number;

  @ManyToOne(() => Torneo, (torneo) => torneo.resultados)
  torneo: Torneo;
}
