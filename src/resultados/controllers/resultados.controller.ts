import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateResultadoDto, UpdateResultadoDto } from '../dtos/index';

import { ResultadosService } from '../services/resultados.service';

@Controller('resultados')
export class ResultadosController {
  constructor(private readonly resultadosService: ResultadosService) {}

  @Post()
  create(@Body() createResultadoDto: CreateResultadoDto) {
    return this.resultadosService.create(createResultadoDto);
  }

  @Get()
  findAll() {
    return this.resultadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resultadosService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateResultadoDto: UpdateResultadoDto,
  ) {
    return this.resultadosService.update(+id, updateResultadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resultadosService.remove(+id);
  }
}
