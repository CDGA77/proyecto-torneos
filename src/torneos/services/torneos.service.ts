import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTorneoDto, UpdateTorneoDto } from '../dtos/index';
import { Torneo } from '../../entities/torneo.entity';

@Injectable()
export class TorneosService {
  constructor(
    @InjectRepository(Torneo)
    private readonly torneoRepository: Repository<Torneo>,
  ) {}

  async create(createTorneoDto: CreateTorneoDto): Promise<Torneo> {
    const torneo = this.torneoRepository.create(createTorneoDto);
    return this.torneoRepository.save(torneo);
  }

  async findAll(): Promise<Torneo[]> {
    return this.torneoRepository.find();
  }

  async findOne(id: number): Promise<Torneo> {
    const torneo = await this.torneoRepository.findOne({ where: { id } });
    if (!torneo) {
      throw new NotFoundException(`Torneo with ID ${id} not found`);
    }
    return torneo;
  }

  async update(id: number, updateTorneoDto: UpdateTorneoDto): Promise<Torneo> {
    const torneo = await this.findOne(id);
    this.torneoRepository.merge(torneo, updateTorneoDto);
    return this.torneoRepository.save(torneo);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.torneoRepository.softDelete(id);
  }
}
