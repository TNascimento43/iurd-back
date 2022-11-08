import {StatusPresencaEnum} from "../enums/status-presenca.enum";
import {ReuniaoPessoa} from "../entities/reuniao-pessoa.entity";

export class ReuniaoPessoaDto {
    id: number;
    reuniaoId: number;
    pessoaId: number;
    dataReuniao: Date;
    justificativa: string;
    status: StatusPresencaEnum;

    constructor(partial: Partial<ReuniaoPessoa>) {
        Object.assign(this, partial);
    }
}