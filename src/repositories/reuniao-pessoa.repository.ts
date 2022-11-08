import {EntityRepository, getManager, Repository} from 'typeorm';
import {ReuniaoPessoa} from "../models/entities/reuniao-pessoa.entity";

@EntityRepository(ReuniaoPessoa)
export class ReuniaoPessoaRepository extends Repository<ReuniaoPessoa> {
    async porData(mes: number, ano: number, inicio: number, fim: number): Promise<any[]> {
        return getManager().query(`select rp.id as id, rp.justificativa as justificativa, r.data as dataReuniao,
                                         rp.status as status, rp.reuniao_id as reuniaoId, rp.pessoa_id as pessoaId
                                         from reuniao_pessoa rp
                                         inner join reuniao r on r.id = rp.reuniao_id
                                         where r.data between '${ano}-${mes}-${inicio}' and '${ano}-${mes}-${fim}'`);
    }
}
