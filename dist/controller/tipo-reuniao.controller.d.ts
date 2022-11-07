import { Logger } from "@nestjs/common";
import { TipoReuniaoService } from "../services/tipo-reuniao.service";
import { TipoReuniaoDto } from "../models/dto/tipo-reuniao.dto";
export declare class TipoReuniaoController {
    private readonly service;
    logger: Logger;
    constructor(service: TipoReuniaoService);
    getAll(): Promise<TipoReuniaoDto[]>;
    save(data: TipoReuniaoDto): Promise<any>;
    getById(id: number): Promise<TipoReuniaoDto>;
    detelar(id: number): Promise<any>;
}
