import { BaseEntity } from 'typeorm';
import { TituloEnum } from "../enums/titulo.enum";
export declare class Pessoa extends BaseEntity {
    id: string;
    nome: string;
    email: string;
    telefone: string;
    ativo: boolean;
    dataNascimento: Date;
    criacao: Date;
    atualizacao: Date;
    titulo: TituloEnum;
}
