import {TituloEnum} from "../enums/titulo.enum";
import {Pessoa} from "../entities/pessoa.entity";

export class PessoaDto {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    ativo: boolean;
    dataNascimento: Date;
    titulo: TituloEnum;

    constructor(partial: Partial<Pessoa>) {
        Object.assign(this, partial);
    }
}