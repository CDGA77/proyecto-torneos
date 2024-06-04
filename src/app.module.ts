import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TorneosModule } from './torneos/torneos.module';
import { JugadoresModule } from './jugadores/jugadores.module';
import { ResultadosModule } from './resultados/resultados.module';
import { Torneo } from './entities/torneo.entity';
import { Jugador } from './entities/jugador.entity';
import { Resultado } from './entities/resultado.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // u otro tipo de base de datos que utilices
      host: 'localhost',
      port: 5432, // puerto de tu base de datos
      username: 'danielgaviria', // tu nombre de usuario
      password: 'Gaviria77', // tu contraseña
      database: 'torneos', // nombre de tu base de datos
      entities: [Torneo, Jugador, Resultado],
      synchronize: true, // Sincronizar las entidades con la base de datos (no recomendado para producción)
    }),
    TorneosModule,
    JugadoresModule,
    ResultadosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
