import { BaseEntity } from "typeorm";
import { Reuniao } from "./reuniao.entity";
import { Pessoa } from "./pessoa.entity";
import { StatusPresencaEnum } from "../enums/status-presenca.enum";
export declare class ReuniaoPessoa extends BaseEntity {
    id: number;
    justificativa: string;
    status: StatusPresencaEnum;
    reuniao: Reuniao;
    pessoa: Pessoa;
}
