import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateResultadoDto, UpdateResultadoDto } from '../dtos/index';
import { ResultadosService } from '../services/resultados.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('resultados')
@Controller('resultados')
export class ResultadosController {
  constructor(private readonly resultadosService: ResultadosService) {}

  @ApiOperation({ summary: 'Crear un nuevo resultado' })
  @Post()
  @HttpCode(201) // Código 201 para Creación Exitosa
  async create(@Body() createResultadoDto: CreateResultadoDto) {
    const resultado = await this.resultadosService.create(createResultadoDto);
    return resultado; // Devuelve el objeto creado
  }

  @ApiOperation({ summary: 'Obtener todos los resultados' })
  @Get()
  @HttpCode(200) // Código 200 para Respuesta Exitosa
  async findAll() {
    const resultados = await this.resultadosService.findAll();
    return resultados; // Devuelve la lista de resultados
  }

  @ApiOperation({ summary: 'Obtener un resultado por su ID' })
  @Get(':id')
  @HttpCode(200) // Código 200 para Respuesta Exitosa
  async findOne(@Param('id') id: string) {
    const resultado = await this.resultadosService.findOne(+id);
    if (!resultado) {
      throw new NotFoundException(`Resultado with ID ${id} not found`);
    }
    return resultado; // Devuelve el resultado encontrado
  }

  @ApiOperation({ summary: 'Actualizar un resultado por su ID' })
  @Put(':id')
  @HttpCode(200) // Código 200 para Respuesta Exitosa
  async update(
    @Param('id') id: string,
    @Body() updateResultadoDto: UpdateResultadoDto,
  ) {
    const resultado = await this.resultadosService.update(+id, updateResultadoDto);
    if (!resultado) {
      throw new NotFoundException(`Resultado with ID ${id} not found`);
    }
    return resultado; // Devuelve el resultado actualizado
  }

  @ApiOperation({ summary: 'Eliminar un resultado por su ID' })
  @Delete(':id')
  @HttpCode(204) // Código 204 para Sin Contenido
  async remove(@Param('id') id: string) {
    await this.resultadosService.remove(+id);
    return; // No hay contenido para devolver después de la eliminación
  }
}
