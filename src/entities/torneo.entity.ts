// torneo.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Jugador } from '../entities/jugador.entity';
import { Resultado } from '../entities/resultado.entity';

@Entity()
export class Torneo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Jugador, (jugador) => jugador.torneo)
  jugadores: Jugador[];

  @OneToMany(() => Resultado, (resultado) => resultado.torneo)
  resultados: Resultado[];
}
