import { IsOptional, IsString } from 'class-validator';

export class UpdateTorneoDto {
  @IsString()
  @IsOptional()
  nombre?: string;
}
