import { IsString, IsDate, IsNumber, MaxLength } from 'class-validator';

export class CreateGestoreDto {
  @IsDate()
  data_posse: Date;
  @IsDate()
  data_nascimento: Date;
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
