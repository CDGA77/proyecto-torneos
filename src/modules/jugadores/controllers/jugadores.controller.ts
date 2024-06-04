import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateJugadorDto, UpdateJugadorDto } from '../dtos/index';
import { JugadoresService } from '../services/jugadores.service';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('jugadores')
@Controller('jugadores')
export class JugadoresController {
  constructor(private readonly jugadoresService: JugadoresService) {}

  @ApiOperation({ summary: 'Crear un nuevo jugador' })
  @Post()
  @HttpCode(201)
  async create(@Body() createJugadorDto: CreateJugadorDto) {
    const jugador = await this.jugadoresService.create(createJugadorDto);
    return jugador;
  }

  @ApiOperation({ summary: 'Obtener todos los jugadores' })
  @Get()
  @HttpCode(200)
  async findAll(@Query('sort') sort: string) {
    const jugadores = sort
      ? await this.jugadoresService.findAllByTorneo(parseInt(sort))
      : await this.jugadoresService.findAll();
    return jugadores;
  }

  @ApiOperation({ summary: 'Obtener un jugador por su ID' })
  @Get(':id')
  @HttpCode(200)
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const jugador = await this.jugadoresService.findOne(id);
    if (!jugador) {
      throw new NotFoundException(`Jugador with ID ${id} not found`);
    }
    return jugador;
  }

  @ApiOperation({ summary: 'Actualizar un jugador por su ID' })
  @Put(':id')
  @HttpCode(200)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateJugadorDto: UpdateJugadorDto,
  ) {
    const jugador = await this.jugadoresService.update(id, updateJugadorDto);
    if (!jugador) {
      throw new NotFoundException(`Jugador with ID ${id} not found`);
    }
    return jugador;
  }

  @ApiOperation({ summary: 'Eliminar un jugador por su ID' })
  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.jugadoresService.remove(id);
    return;
  }
}
