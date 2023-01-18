import{IsEmail,IsString,IsDate,IsNumber,MinLength,MaxLength} from 'class-validator'

export class CreatePartidoDto {
    @IsString()
    @MaxLength(100)
    nome: string;

    @IsString()
    @MaxLength(10)
    sigla: string;
}
