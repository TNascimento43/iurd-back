import { ReuniaoRepository } from "../repositories/reuniao.repository";
import { ReuniaoDto } from "../models/dto/reuniao.dto";
import { TipoReuniaoService } from "./tipo-reuniao.service";
export declare class ReuniaoService {
    private repository;
    private tipoReuniaoService;
    constructor(repository: ReuniaoRepository, tipoReuniaoService: TipoReuniaoService);
    deletar(id: number): Promise<any>;
    findAll(): Promise<ReuniaoDto[]>;
    findOne(id: number): Promise<ReuniaoDto | undefined>;
    save(dto: ReuniaoDto): Promise<any>;
    private findByFields;
    private findByRelations;
}
