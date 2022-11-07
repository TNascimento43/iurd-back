import {Reuniao} from "../entities/reuniao.entity";

export class ReuniaoDto {
    id: number;
    data: Date;
    tipoReuniaoId: number;

    constructor(partial: Partial<Reuniao>) {
        Object.assign(this, partial);
    }
}