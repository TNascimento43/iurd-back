// import {Injectable} from "@nestjs/common";
// import {InjectRepository} from "@nestjs/typeorm";
// import {ReuniaoRepository} from "../repositories/reuniao.repository";
// import {ReuniaoDto} from "../models/dto/reuniao.dto";
// import {Reuniao} from "../models/entities/reuniao.entity";
// import {FindOneOptions} from "typeorm";
// import {TipoReuniaoService} from "./tipo-reuniao.service";
//
// @Injectable()
// export class ReuniaoService {
//     constructor(@InjectRepository(ReuniaoRepository) private repository: ReuniaoRepository,
//                 private tipoReuniaoService: TipoReuniaoService) {
//     }
//
//     async deletar(id: number): Promise<any> {
//         const entity = await this.findByFields({where: {id: id}});
//         if (!entity) {
//             return {statusCode: 400, message: 'Reunião não encontrado com id informado.'};
//         }
//         await this.repository.delete(entity);
//         return {statusCode: 200, message: 'Dados removido com sucesso'};
//     }
//
//     async findAll(): Promise<ReuniaoDto[]> {
//         const reunioes = await this.findByRelations();
//         let res: ReuniaoDto[] = [];
//         reunioes.forEach(it => {
//             let reuniao = new ReuniaoDto(it);
//             reuniao.tipoReuniaoId = it.tipoReuniao.id;
//             res.push(reuniao)
//         });
//         return res;
//     }
//
//     async findOne(id: number): Promise<ReuniaoDto | undefined> {
//         const entity = await this.findByFields({where: {id: id}});
//         if (!entity) {
//             return null;
//         }
//         let reuniao = new ReuniaoDto(entity);
//         reuniao.tipoReuniaoId = entity.tipoReuniao.id;
//         return reuniao;
//     }
//
//     async save(dto: ReuniaoDto): Promise<any> {
//         let entity = new Reuniao();
//         entity = Object.assign(entity, dto);
//         let tipoReuniao = await this.tipoReuniaoService.buscarPorId(dto.tipoReuniaoId);
//         if (!tipoReuniao || !tipoReuniao.nome) {
//             return {statusCode: 400, message: 'Reunião não encontrado com id informado.'};
//         }
//         entity.tipoReuniao = tipoReuniao;
//         await this.repository.save(entity);
//         return dto.id ?
//             {statusCode: 200, message: 'Dados atualizado com sucesso'} :
//             {statusCode: 201, message: 'Dados cadastrados com sucesso'};
//     }
//
//     private async findByFields(options: FindOneOptions<Reuniao>): Promise<Reuniao | undefined> {
//         options.relations = ['tipoReuniao'];
//         return await this.repository.findOne(options);
//     }
//
//     private async findByRelations(): Promise<Reuniao[] | undefined> {
//         let options: FindOneOptions<Reuniao> = {};
//         options.relations = ['tipoReuniao'];
//         return await this.repository.find(options);
//     }
// }