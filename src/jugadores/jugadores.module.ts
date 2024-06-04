import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JugadoresController } from './controllers/jugadores.controller';
import { JugadoresService } from './services/jugadores.service';
import { Jugador } from '../entities/jugador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Jugador])],
  controllers: [JugadoresController],
  providers: [JugadoresService],
})
export class JugadoresModule {}
