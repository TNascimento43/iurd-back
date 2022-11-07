import {EntityRepository, Repository} from 'typeorm';
import {TipoReuniao} from "../models/entities/tipo-reuniao.entity";

@EntityRepository(TipoReuniao)
export class TipoReuniaoRepository extends Repository<TipoReuniao> {
}
