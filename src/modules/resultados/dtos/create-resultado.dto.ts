import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateResultadoDto {
  @IsNumber()
  @IsNotEmpty()
  ganador: number;

  @IsNumber()
  @IsNotEmpty()
  perdedor: number;

  @IsNumber()
  @IsNotEmpty()
  puntajeGanador: number;

  @IsNumber()
  @IsNotEmpty()
  puntajePerdedor: number;

  @IsNumber()
  @IsNotEmpty()
  torneoId: number;
}
