import { IsOptional, IsString } from 'class-validator';

export class UpdateJugadorDto {
  @IsString()
  @IsOptional()
  nombre?: string;
}
