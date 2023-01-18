import {
  IsString,
  IsDate,
  IsNumber,
  MinLength,
  MaxLength,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @MinLength(11)
  @MaxLength(11)
  cpf: string;

  @IsString()
  @MaxLength(60)
  nome_completo: string;

  @IsDate()
  data_nascimento: Date;

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
  numero: number;
}
