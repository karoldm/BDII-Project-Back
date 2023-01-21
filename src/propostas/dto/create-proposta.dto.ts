import { IsString, IsDate, IsNumber, MaxLength } from 'class-validator';
export class CreatePropostaDto {
  @IsString()
  @MaxLength(100)
  titulo: string;

  @IsString()
  @MaxLength(500)
  descricao: string;

  @IsString()
  data_aprovacao: string;

  @IsNumber()
  numero_gestor: number;
}
