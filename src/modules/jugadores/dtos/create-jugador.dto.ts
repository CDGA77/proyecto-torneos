import { IsNotEmpty, IsString } from 'class-validator';

export class CreateJugadorDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
}
