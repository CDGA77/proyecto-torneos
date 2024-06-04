import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTorneoDto, UpdateTorneoDto } from '../dtos/index';
import { TorneosService } from '../services/torneos.service';

@Controller('torneos')
export class TorneosController {
  constructor(private readonly torneosService: TorneosService) {}

  @Post()
  create(@Body() createTorneoDto: CreateTorneoDto) {
    return this.torneosService.create(createTorneoDto);
  }

  @Get()
  findAll() {
    return this.torneosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.torneosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTorneoDto: UpdateTorneoDto) {
    return this.torneosService.update(+id, updateTorneoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.torneosService.remove(+id);
  }
}