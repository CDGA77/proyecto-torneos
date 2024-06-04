import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TorneosModule } from './modules/torneos/torneos.module';
import { JugadoresModule } from './modules/jugadores/jugadores.module';
import { ResultadosModule } from './modules/resultados/resultados.module';
import { Torneo } from './entities/torneo.entity';
import { Jugador } from './entities/jugador.entity';
import { Resultado } from './entities/resultado.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-cool-math-a4goen12-pooler.us-east-1.aws.neon.tech',
      port: 5432,
      username: 'default',
      password: 'mGUVjIB5XTf0',
      database: 'verceldb',
      entities: [Torneo, Jugador, Resultado],
      synchronize: true,
      extra: {
        ssl: true,
      },
    }),
    TorneosModule,
    JugadoresModule,
    ResultadosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
