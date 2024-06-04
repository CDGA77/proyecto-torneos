import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TorneosController } from './controllers/torneos.controller';
import { TorneosService } from './services/torneos.service';
import { Torneo } from '../../entities/torneo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Torneo])],
  controllers: [TorneosController],
  providers: [TorneosService],
})
export class TorneosModule {}
