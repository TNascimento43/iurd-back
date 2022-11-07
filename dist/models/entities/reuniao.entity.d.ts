import { BaseEntity } from 'typeorm';
import { TipoReuniao } from "./tipo-reuniao.entity";
export declare class Reuniao extends BaseEntity {
    id: number;
    data: Date;
    tipoReuniao: TipoReuniao;
}
