import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJugadorDto, UpdateJugadorDto } from '../dtos/index';
import { Jugador } from '../../../entities/jugador.entity';
@Injectable()
export class JugadoresService {
  constructor(
    @InjectRepository(Jugador)
    private readonly jugadorRepository: Repository<Jugador>,
  ) {}

  async create(createJugadorDto: CreateJugadorDto): Promise<Jugador> {
    const jugador = this.jugadorRepository.create(createJugadorDto);
    return this.jugadorRepository.save(jugador);
  }

  async findAll(): Promise<Jugador[]> {
    return this.jugadorRepository.find();
  }

  async findOne(id: number): Promise<Jugador> {
    const jugador = await this.jugadorRepository.findOne({ where: { id } });
    if (!jugador) {
      throw new NotFoundException(`Jugador with ID ${id} not found`);
    }
    return jugador;
  }

  async update(
    id: number,
    updateJugadorDto: UpdateJugadorDto,
  ): Promise<Jugador> {
    const jugador = await this.findOne(id);
    this.jugadorRepository.merge(jugador, updateJugadorDto);
    return this.jugadorRepository.save(jugador);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.jugadorRepository.softDelete(id);
  }
}
