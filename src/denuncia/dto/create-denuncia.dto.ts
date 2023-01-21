import { IsString, IsNumber, MinLength, MaxLength } from 'class-validator';

export class CreateDenunciaDto {
  @IsString()
  data_denuncia: string;

  @IsString()
  @MaxLength(500)
  texto_denuncia: string;

  @IsString()
  @MinLength(11)
  @MaxLength(11)
  cpf_cidadao: string;

  @IsNumber()
  numero_gestor: number;
}
