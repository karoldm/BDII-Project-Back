import{IsEmail,IsString,IsDate,IsNumber,MinLength,MaxLength} from 'class-validator'
export class CreatePropostaDto {
    @IsNumber()
    numero:number;
    @IsString()
    @MaxLength(100)
    titulo:string;
    @IsString()
    @MaxLength(500)
    descricao:string;
    @IsDate()
    data_aprovacao:Date;
    @IsNumber()
    numero_gestor:number;
}
