import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTorneoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
}
