import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions } from 'typeorm';
import { CreateTorneoDto, UpdateTorneoDto } from '../dtos/index';
import { Torneo } from '../../../entities/torneo.entity';

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

  async findAll(page: number = 1, limit: number = 10): Promise<Torneo[]> {
    const options: FindManyOptions<Torneo> = {
      skip: (page - 1) * limit,
      take: limit,
    };
    return this.torneoRepository.find(options);
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

  async findByFilter(filter: any): Promise<Torneo[]> {
    return this.torneoRepository.find({ where: filter });
  }

  async findAllSorted(sort: string): Promise<Torneo[]> {
    return this.torneoRepository.find({ order: { [sort]: 'ASC' } });
  }

  // Métodos para la creación de datos de ejemplo (seeds)
  async seedTorneos(torneos: CreateTorneoDto[]): Promise<Torneo[]> {
    const createdTorneos = await Promise.all(
      torneos.map((torneo) => this.create(torneo)),
    );
    return createdTorneos;
  }
}
