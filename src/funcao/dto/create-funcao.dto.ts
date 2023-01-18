import { IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateFuncaoDto {
  @IsString()
  @MaxLength(60)
  titulo: string;

  @IsNumber()
  mandato: number;
}
