"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReuniaoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const reuniao_repository_1 = require("../repositories/reuniao.repository");
const reuniao_dto_1 = require("../models/dto/reuniao.dto");
const reuniao_entity_1 = require("../models/entities/reuniao.entity");
const tipo_reuniao_service_1 = require("./tipo-reuniao.service");
let ReuniaoService = class ReuniaoService {
    constructor(repository, tipoReuniaoService) {
        this.repository = repository;
        this.tipoReuniaoService = tipoReuniaoService;
    }
    async deletar(id) {
        const entity = await this.findByFields({ where: { id: id } });
        if (!entity) {
            return { statusCode: 400, message: 'Reunião não encontrado com id informado.' };
        }
        await this.repository.delete(entity);
        return { statusCode: 200, message: 'Dados removido com sucesso' };
    }
    async findAll() {
        const reunioes = await this.findByRelations();
        let res = [];
        reunioes.forEach(it => {
            let reuniao = new reuniao_dto_1.ReuniaoDto(it);
            reuniao.tipoReuniaoId = it.tipoReuniao.id;
            res.push(reuniao);
        });
        return res;
    }
    async findOne(id) {
        const entity = await this.findByFields({ where: { id: id } });
        if (!entity) {
            return null;
        }
        let reuniao = new reuniao_dto_1.ReuniaoDto(entity);
        reuniao.tipoReuniaoId = entity.tipoReuniao.id;
        return reuniao;
    }
    async save(dto) {
        let entity = new reuniao_entity_1.Reuniao();
        entity = Object.assign(entity, dto);
        let tipoReuniao = await this.tipoReuniaoService.buscarPorId(dto.tipoReuniaoId);
        if (!tipoReuniao || !tipoReuniao.nome) {
            return { statusCode: 400, message: 'Reunião não encontrado com id informado.' };
        }
        entity.tipoReuniao = tipoReuniao;
        await this.repository.save(entity);
        return dto.id ?
            { statusCode: 200, message: 'Dados atualizado com sucesso' } :
            { statusCode: 201, message: 'Dados cadastrados com sucesso' };
    }
    async findByFields(options) {
        options.relations = ['tipoReuniao'];
        return await this.repository.findOne(options);
    }
    async findByRelations() {
        let options = {};
        options.relations = ['tipoReuniao'];
        return await this.repository.find(options);
    }
};
ReuniaoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reuniao_repository_1.ReuniaoRepository)),
    __metadata("design:paramtypes", [reuniao_repository_1.ReuniaoRepository,
        tipo_reuniao_service_1.TipoReuniaoService])
], ReuniaoService);
exports.ReuniaoService = ReuniaoService;
//# sourceMappingURL=reuniao.service.js.map