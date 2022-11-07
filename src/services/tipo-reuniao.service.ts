import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {TipoReuniaoRepository} from "../repositories/tipo-reuniao.repository";
import {TipoReuniaoDto} from "../models/dto/tipo-reuniao.dto";
import {TipoReuniao} from "../models/entities/tipo-reuniao.entity";
import {FindOneOptions} from "typeorm";
import {ReuniaoRepository} from "../repositories/reuniao.repository";
import {Reuniao} from "../models/entities/reuniao.entity";

@Injectable()
export class TipoReuniaoService {
    constructor(@InjectRepository(TipoReuniaoRepository) private repository: TipoReuniaoRepository,
                @InjectRepository(ReuniaoRepository) private reuniaoRepository: ReuniaoRepository) {
    }

    async buscarPorId(id: number): Promise<TipoReuniao>  {
        return await this.findByFields({where: {id: id}});
    }

    async deletar(id: number): Promise<any> {
        const entity = await this.findByFields({where: {id: id}});
        if (!entity) {
            return {statusCode: 400, message: 'Tipo de Reunião não encontrado com id informado.'};
        }
        let reunioes = await this.findByRelations(id);
        if (reunioes.length > 0) {
            return {statusCode: 400, message: 'Não é possível deletar pois este tipo de Reunião possue chamadas relacionada.'};
        }
        await this.repository.delete(entity);
        return {statusCode: 200, message: 'Dados removido com sucesso'};
    }

    async findAll(): Promise<TipoReuniaoDto[]> {
        const pessoas = await this.repository.find();
        return pessoas.map(it => new TipoReuniaoDto(it));
    }

    async findOne(id: number): Promise<TipoReuniaoDto | undefined> {
        const entity = await this.findByFields({where: {id: id}});
        if (!entity) {
            return null;
        }
        return new TipoReuniaoDto(entity);
    }

    async save(dto: TipoReuniaoDto): Promise<any> {
        dto.nome = dto.nome.toUpperCase().trim();
        const entityExistent = await this.findByFields({where: {nome: dto.nome}});
        if (entityExistent) {
            return {statusCode: 400, message: 'Já existe um tipo cadastrado com este nome'};
        }
        let entity = new TipoReuniao();
        entity = Object.assign(entity, dto);
        await this.repository.save(entity);
        return dto.id ?
            {statusCode: 200, message: 'Dados atualizado com sucesso'} :
            {statusCode: 201, message: 'Dados cadastrados com sucesso'};
    }

    private async findByFields(options: FindOneOptions<TipoReuniao>): Promise<TipoReuniao | undefined> {
        options.relations = [];
        return await this.repository.findOne(options);
    }

    private async findByRelations(id): Promise<Reuniao[] | undefined> {
        let options: FindOneOptions<Reuniao> = {where: {tipoReuniao: {id: id}}};
        return await this.reuniaoRepository.find(options);
    }
}