import { IsString, IsDate, IsNumber, MaxLength } from 'class-validator';

export class CreateGestorDto {
  @IsString()
  data_posse: string;
  @IsString()
  data_nascimento: string;
  @IsString()
  foto: string;
  @IsString()
  @MaxLength(60)
  nome_completo: string;
  @IsNumber()
  id_funcao: number;
  @IsNumber()
  id_partido: number;
}
