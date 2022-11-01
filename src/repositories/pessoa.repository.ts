import {EntityRepository, Repository} from 'typeorm';
import {Pessoa} from "../models/entities/pessoa.entity";

@EntityRepository(Pessoa)
export class PessoaRepository extends Repository<Pessoa> {
}
