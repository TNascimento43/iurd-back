import { Logger } from "@nestjs/common";
import { ReuniaoService } from "../services/reuniao.service";
import { ReuniaoDto } from "../models/dto/reuniao.dto";
export declare class ReuniaoController {
    private readonly service;
    logger: Logger;
    constructor(service: ReuniaoService);
    getAll(): Promise<ReuniaoDto[]>;
    save(data: ReuniaoDto): Promise<any>;
    getById(id: number): Promise<ReuniaoDto>;
    detelar(id: number): Promise<any>;
}
