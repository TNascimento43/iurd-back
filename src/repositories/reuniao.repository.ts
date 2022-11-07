import {EntityRepository, Repository} from 'typeorm';
import {Reuniao} from "../models/entities/reuniao.entity";

@EntityRepository(Reuniao)
export class ReuniaoRepository extends Repository<Reuniao> {
}
