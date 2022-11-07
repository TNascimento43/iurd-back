import { ReuniaoPessoaRepository } from "../repositories/reuniao-pessoa.repository";
import { ReuniaoPessoaDto } from "../models/dto/reuniao-pessoa.dto";
export declare class ReuniaoPessoaService {
    private repository;
    constructor(repository: ReuniaoPessoaRepository);
    salvar(dto: ReuniaoPessoaDto): Promise<any>;
    salvarTodos(dto: ReuniaoPessoaDto[]): Promise<any>;
    findAll(reuniaoId: any): Promise<ReuniaoPessoaDto[]>;
    private findByFields;
    private findByField;
}
