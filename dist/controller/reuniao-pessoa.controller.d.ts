import { Logger } from "@nestjs/common";
import { ReuniaoPessoaService } from "../services/reuniao-pessoa.service";
import { ReuniaoPessoaDto } from "../models/dto/reuniao-pessoa.dto";
export declare class ReuniaoPessoaController {
    private readonly service;
    logger: Logger;
    constructor(service: ReuniaoPessoaService);
    getAll(id: number): Promise<ReuniaoPessoaDto[]>;
    save(data: ReuniaoPessoaDto): Promise<any>;
}
