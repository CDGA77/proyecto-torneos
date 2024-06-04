import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultadosController } from './controllers/resultados.controller';
import { ResultadosService } from './services/resultados.service';
import { Resultado } from '../../entities/resultado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Resultado])],
  controllers: [ResultadosController],
  providers: [ResultadosService],
})
export class ResultadosModule {}
