import {TipoReuniao} from "../entities/tipo-reuniao.entity";

export class TipoReuniaoDto {
    id: number;
    nome: string;

    constructor(partial: Partial<TipoReuniao>) {
        Object.assign(this, partial);
    }
}