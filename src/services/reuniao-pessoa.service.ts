import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {ReuniaoPessoaRepository} from "../repositories/reuniao-pessoa.repository";
import {ReuniaoPessoaDto} from "../models/dto/reuniao-pessoa.dto";
import {ReuniaoPessoa} from "../models/entities/reuniao-pessoa.entity";
import {Pessoa} from "../models/entities/pessoa.entity";
import {Reuniao} from "../models/entities/reuniao.entity";
import {FindOneOptions} from "typeorm";

@Injectable()
export class ReuniaoPessoaService {
    constructor(@InjectRepository(ReuniaoPessoaRepository) private repository: ReuniaoPessoaRepository) {
    }

    async salvar(dto: ReuniaoPessoaDto): Promise<any> {
        let entidade = new ReuniaoPessoa();
        const pessoa = new Pessoa();
        const reuniao = new Reuniao();
        pessoa.id = dto.pessoaId;
        reuniao.id = dto.reuniaoId;
        const chamada = await this.findByField({where: {reuniao: reuniao, pessoa: pessoa}});
        chamada ? entidade.id = chamada.id : entidade.id = null;
        entidade.justificativa = dto.justificativa;
        entidade.pessoa = pessoa;
        entidade.reuniao = reuniao;
        entidade.status = dto.status;
        this.repository.save(entidade);
        return {statusCode: 200, message: 'Ok'};
    }

    async salvarTodos(dto: ReuniaoPessoaDto[]): Promise<any> {
        let entidades: ReuniaoPessoa[] = [];
        if (dto.length > 0) {
            dto.forEach(it => {
                let reuniaoPessoa = new ReuniaoPessoa();
                reuniaoPessoa.justificativa = it.justificativa;
                const pessoa = new Pessoa();
                const reuniao = new Reuniao();
                pessoa.id = it.pessoaId;
                reuniao.id = it.reuniaoId;
                reuniaoPessoa.pessoa = pessoa;
                reuniaoPessoa.reuniao = reuniao;
                reuniaoPessoa.status = it.status;
                entidades.push(reuniaoPessoa);
            });
            this.repository.save(entidades);
        }
        return {statusCode: 200, message: 'Chamada realizada com sucesso'};
    }

    async findAll(reuniaoId): Promise<ReuniaoPessoaDto[]> {
        const chamada = await this.findByFields({where: {reuniao: {id: reuniaoId}}});
        let res: ReuniaoPessoaDto[] = [];
        chamada.forEach(it => {
            let reuniaoPessoa = new ReuniaoPessoaDto(it);
            reuniaoPessoa.reuniaoId = it.reuniao.id;
            reuniaoPessoa.pessoaId = it.pessoa.id;
            res.push(reuniaoPessoa)
        });
        return res;
    }

    async porData(mes: number, ano: number): Promise<ReuniaoPessoaDto[]> {
        const inicio = new Date(ano, mes - 1, 1);
        const fim = new Date(ano, mes, 0);
        const chamada = await this.repository.porData(mes, ano, inicio.getDate(), fim.getDate());
        let res: ReuniaoPessoaDto[] = [];
        if (chamada.length < 1) {
            return res;
        }
        chamada.forEach(it => {
            let reuniaoPessoa = new ReuniaoPessoaDto(it);
            reuniaoPessoa.reuniaoId = it.reuniaoId;
            reuniaoPessoa.pessoaId = it.pessoaId;
            reuniaoPessoa.dataReuniao = it.dataReuniao
            res.push(reuniaoPessoa)
        });
        return res;
    }

    private async findByFields(options: FindOneOptions<ReuniaoPessoa>): Promise<ReuniaoPessoa[] | undefined> {
        options.relations = ['pessoa', 'reuniao'];
        return await this.repository.find(options);
    }

    private async findByField(options: FindOneOptions<ReuniaoPessoa>): Promise<ReuniaoPessoa | undefined> {
        options.relations = ['pessoa', 'reuniao'];
        return await this.repository.findOne(options);
    }
}