import { TipoReuniaoRepository } from "../repositories/tipo-reuniao.repository";
import { TipoReuniaoDto } from "../models/dto/tipo-reuniao.dto";
import { TipoReuniao } from "../models/entities/tipo-reuniao.entity";
import { ReuniaoRepository } from "../repositories/reuniao.repository";
export declare class TipoReuniaoService {
    private repository;
    private reuniaoRepository;
    constructor(repository: TipoReuniaoRepository, reuniaoRepository: ReuniaoRepository);
    buscarPorId(id: number): Promise<TipoReuniao>;
    deletar(id: number): Promise<any>;
    findAll(): Promise<TipoReuniaoDto[]>;
    findOne(id: number): Promise<TipoReuniaoDto | undefined>;
    save(dto: TipoReuniaoDto): Promise<any>;
    private findByFields;
    private findByRelations;
}
