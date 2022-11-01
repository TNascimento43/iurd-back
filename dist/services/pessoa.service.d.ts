import { PessoaRepository } from "../repositories/pessoa.repository";
import { PessoaDto } from "../models/dto/pessoa.dto";
export declare class PessoaService {
    private repository;
    constructor(repository: PessoaRepository);
    alteraStatus(id: number): Promise<any>;
    findAll(): Promise<PessoaDto[]>;
    findOne(id: number): Promise<PessoaDto | undefined>;
    save(dto: PessoaDto): Promise<any>;
    private findByFields;
}
