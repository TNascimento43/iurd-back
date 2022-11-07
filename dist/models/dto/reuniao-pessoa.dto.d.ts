import { StatusPresencaEnum } from "../enums/status-presenca.enum";
import { ReuniaoPessoa } from "../entities/reuniao-pessoa.entity";
export declare class ReuniaoPessoaDto {
    id: number;
    reuniaoId: number;
    pessoaId: number;
    justificativa: string;
    status: StatusPresencaEnum;
    constructor(partial: Partial<ReuniaoPessoa>);
}
