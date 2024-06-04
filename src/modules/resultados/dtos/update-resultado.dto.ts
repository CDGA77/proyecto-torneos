import { IsNumber, IsOptional } from 'class-validator';

export class UpdateResultadoDto {
  @IsNumber()
  @IsOptional()
  ganador?: number;

  @IsNumber()
  @IsOptional()
  perdedor?: number;

  @IsNumber()
  @IsOptional()
  puntajeGanador?: number;

  @IsNumber()
  @IsOptional()
  puntajePerdedor?: number;
}
