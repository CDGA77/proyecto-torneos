import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTorneoDto, UpdateTorneoDto } from '../dtos/index';
import { TorneosService } from '../services/torneos.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiKeyGuard } from '../../../guards/api-key.guard';

@ApiTags('torneos')
@Controller('torneos')
export class TorneosController {
  constructor(private readonly torneosService: TorneosService) {}

  @ApiOperation({ summary: 'Crear un torneo' })
  @Post()
  @HttpCode(201) // Código 201 para Creación Exitosa
  @UseGuards(ApiKeyGuard)
  async create(@Body(new ValidationPipe()) createTorneoDto: CreateTorneoDto) {
    const torneo = await this.torneosService.create(createTorneoDto);
    return torneo; // Devuelve el objeto creado
  }

  @ApiOperation({ summary: 'Obtener todos los torneos' })
  @Get()
  @HttpCode(200) // Código 200 para Respuesta Exitosa
  @UseGuards(ApiKeyGuard)
  async findAll(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('sort') sort: string,
  ) {
    if (sort) {
      const torneos = await this.torneosService.findAllSorted(sort);
      return torneos;
    }
    const torneos = await this.torneosService.findAll(page, limit);
    return torneos; // Devuelve la lista de torneos
  }

  @ApiOperation({ summary: 'Obtener un torneo por su ID' })
  @Get(':id')
  @HttpCode(200) // Código 200 para Respuesta Exitosa
  @UseGuards(ApiKeyGuard)
  async findOne(@Param('id') id: string) {
    const torneo = await this.torneosService.findOne(+id);
    return torneo; // Devuelve el torneo encontrado
  }

  @ApiOperation({ summary: 'Actualizar un torneo por su ID' })
  @Put(':id')
  @HttpCode(200) // Código 200 para Respuesta Exitosa
  @UseGuards(ApiKeyGuard)
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateTorneoDto: UpdateTorneoDto,
  ) {
    const torneo = await this.torneosService.update(+id, updateTorneoDto);
    return torneo; // Devuelve el torneo actualizado
  }

  @ApiOperation({ summary: 'Eliminar un torneo por su ID' })
  @Delete(':id')
  @HttpCode(204) // Código 204 para Sin Contenido
  @UseGuards(ApiKeyGuard)
  async remove(@Param('id') id: string) {
    await this.torneosService.remove(+id);
    return; // No hay contenido para devolver después de la eliminación
  }
}
