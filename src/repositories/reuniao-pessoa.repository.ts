import {EntityRepository, Repository} from 'typeorm';
import {ReuniaoPessoa} from "../models/entities/reuniao-pessoa.entity";

@EntityRepository(ReuniaoPessoa)
export class ReuniaoPessoaRepository extends Repository<ReuniaoPessoa> {
}
