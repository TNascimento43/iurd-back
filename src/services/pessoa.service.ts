import {Injectable} from "@nestjs/common";
import {PessoaRepository} from "../repositories/pessoa.repository";
import {PessoaDto} from "../models/dto/pessoa.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {Pessoa} from "../models/entities/pessoa.entity";
import {FindOneOptions} from "typeorm";

@Injectable()
export class PessoaService {
    constructor(@InjectRepository(PessoaRepository) private repository: PessoaRepository) {
    }

    async alteraStatus(id: number): Promise<any> {
        let entity = await this.findByFields({where: {id: id}});
        if (entity) {
            entity.ativo = !entity.ativo;
            await this.repository.save(entity);
            return entity.ativo ?
                {statusCode: 200, message: 'Ativado com sucesso'} :
                {statusCode: 201, message: 'Inativado com sucesso'};
        }
        return {statusCode: 400, message: 'Pessoa não encontrada'};
    }

    async findAll(): Promise<PessoaDto[]> {
        const pessoas = await this.repository.find();
        return pessoas.map(it => new PessoaDto(it));
    }

    async findOne(id: number): Promise<PessoaDto | undefined> {
        const entity = await this.findByFields({where: {id: id}});
        if (!entity) {
            return null;
        }
        return new PessoaDto(entity);
    }

    async save(dto: PessoaDto): Promise<any> {
        let entityExistent = new Pessoa();
        let entity = new Pessoa();
        let isExistent = false;
        if (dto.email) {
            entityExistent = await this.findByFields({where: {email: dto.email}});
            entity = Object.assign({}, entityExistent);
            isExistent = !!entity.id;
        }
        entity = Object.assign(entity, dto);
        await this.repository.save(entity);
        return isExistent ?
            {statusCode: 200, message: 'Dados atualizado com sucesso'} :
            {statusCode: 201, message: 'Dados cadastrados com sucesso'};
    }

    private async findByFields(options: FindOneOptions<Pessoa>): Promise<Pessoa | undefined> {
        options.relations = [];
        const result = await this.repository.findOne(options);
        return result;
    }
}