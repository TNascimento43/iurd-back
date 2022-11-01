import { Logger } from "@nestjs/common";
import { PessoaService } from "../services/pessoa.service";
import { PessoaDto } from "../models/dto/pessoa.dto";
export declare class PessoaController {
    private readonly service;
    logger: Logger;
    constructor(service: PessoaService);
    getAll(): Promise<PessoaDto[]>;
    save(data: PessoaDto): Promise<any>;
    getById(id: number): Promise<PessoaDto>;
    alteraStatus(id: number): Promise<any>;
}
