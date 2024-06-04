import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CreateJugadorDto, UpdateJugadorDto } from '../dtos/index';
import { JugadoresService } from '../services/jugadores.service';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('jugadores')
@Controller('jugadores')
export class JugadoresController {
  constructor(private readonly jugadoresService: JugadoresService) {}

  @ApiOperation({ summary: 'Crear un nuevo jugador' })
  @Post()
  async create(@Body() createJugadorDto: CreateJugadorDto) {
    const jugador = await this.jugadoresService.create(createJugadorDto);
    return jugador;
  }

  @ApiOperation({ summary: 'Obtener todos los jugadores' })
  @Get()
  async findAll(@Query('torneoId') torneoId: number, @Query('sort') sort: string) {
    const jugadores = torneoId ? await this.jugadoresService.findAllByTorneo(torneoId, sort) : await this.jugadoresService.findAll();
    return jugadores;
  }

  @ApiOperation({ summary: 'Obtener un jugador por su ID' })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const jugador = await this.jugadoresService.findOne(id);
    return jugador;
  }

  @ApiOperation({ summary: 'Actualizar un jugador por su ID' })
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateJugadorDto: UpdateJugadorDto,
  ) {
    const jugador = await this.jugadoresService.update(id, updateJugadorDto);
    return jugador;
  }

  @ApiOperation({ summary: 'Eliminar un jugador por su ID' })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.jugadoresService.remove(id);
    return;
  }
}
