import { IsString, IsNumber, MinLength, MaxLength } from 'class-validator';

export class CreateCidadaoDto {
  @IsString()
  @MinLength(11)
  @MaxLength(11)
  cpf: string;

  @IsString()
  @MaxLength(60)
  nome_completo: string;

  @IsString()
  data_nascimento: string;

  @IsString()
  @MaxLength(50)
  rua: string;

  @IsString()
  @MaxLength(50)
  bairro: string;

  @IsString()
  @MaxLength(50)
  cidade: string;

  @IsString()
  @MaxLength(2)
  uf: string;

  @IsNumber()
  nro: number;

  @IsString()
  @MaxLength(60)
  email: string;

  @IsString()
  @MaxLength(60)
  senha: string;
}
