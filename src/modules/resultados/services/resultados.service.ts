import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateResultadoDto, UpdateResultadoDto } from '../dtos/index';
import { Resultado } from '../../../entities/resultado.entity';

@Injectable()
export class ResultadosService {
  constructor(
    @InjectRepository(Resultado)
    private readonly resultadoRepository: Repository<Resultado>,
  ) {}

  async create(createResultadoDto: CreateResultadoDto): Promise<Resultado> {
    const resultado = this.resultadoRepository.create(createResultadoDto);
    return this.resultadoRepository.save(resultado);
  }

  async findAll(): Promise<Resultado[]> {
    return this.resultadoRepository.find();
  }

  async findOne(id: number): Promise<Resultado> {
    const resultado = await this.resultadoRepository.findOne({ where: { id } });
    if (!resultado) {
      throw new NotFoundException(`Resultado with ID ${id} not found`);
    }
    return resultado;
  }

  async update(
    id: number,
    updateResultadoDto: UpdateResultadoDto,
  ): Promise<Resultado> {
    const resultado = await this.findOne(id);
    this.resultadoRepository.merge(resultado, updateResultadoDto);
    return this.resultadoRepository.save(resultado);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.resultadoRepository.softDelete(id);
  }
}
