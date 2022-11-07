import { Reuniao } from "../entities/reuniao.entity";
export declare class ReuniaoDto {
    id: number;
    data: Date;
    tipoReuniaoId: number;
    constructor(partial: Partial<Reuniao>);
}
