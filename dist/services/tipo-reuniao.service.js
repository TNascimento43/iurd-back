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
exports.TipoReuniaoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tipo_reuniao_repository_1 = require("../repositories/tipo-reuniao.repository");
const tipo_reuniao_dto_1 = require("../models/dto/tipo-reuniao.dto");
const tipo_reuniao_entity_1 = require("../models/entities/tipo-reuniao.entity");
const reuniao_repository_1 = require("../repositories/reuniao.repository");
let TipoReuniaoService = class TipoReuniaoService {
    constructor(repository, reuniaoRepository) {
        this.repository = repository;
        this.reuniaoRepository = reuniaoRepository;
    }
    async buscarPorId(id) {
        return await this.findByFields({ where: { id: id } });
    }
    async deletar(id) {
        const entity = await this.findByFields({ where: { id: id } });
        if (!entity) {
            return { statusCode: 400, message: 'Tipo de Reunião não encontrado com id informado.' };
        }
        let reunioes = await this.findByRelations(id);
        if (reunioes.length > 0) {
            return { statusCode: 400, message: 'Não é possível deletar pois este tipo de Reunião possue chamadas relacionada.' };
        }
        await this.repository.delete(entity);
        return { statusCode: 200, message: 'Dados removido com sucesso' };
    }
    async findAll() {
        const pessoas = await this.repository.find();
        return pessoas.map(it => new tipo_reuniao_dto_1.TipoReuniaoDto(it));
    }
    async findOne(id) {
        const entity = await this.findByFields({ where: { id: id } });
        if (!entity) {
            return null;
        }
        return new tipo_reuniao_dto_1.TipoReuniaoDto(entity);
    }
    async save(dto) {
        dto.nome = dto.nome.toUpperCase().trim();
        const entityExistent = await this.findByFields({ where: { nome: dto.nome } });
        if (entityExistent) {
            return { statusCode: 400, message: 'Já existe um tipo cadastrado com este nome' };
        }
        let entity = new tipo_reuniao_entity_1.TipoReuniao();
        entity = Object.assign(entity, dto);
        await this.repository.save(entity);
        return dto.id ?
            { statusCode: 200, message: 'Dados atualizado com sucesso' } :
            { statusCode: 201, message: 'Dados cadastrados com sucesso' };
    }
    async findByFields(options) {
        options.relations = [];
        return await this.repository.findOne(options);
    }
    async findByRelations(id) {
        let options = { where: { tipoReuniao: { id: id } } };
        return await this.reuniaoRepository.find(options);
    }
};
TipoReuniaoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tipo_reuniao_repository_1.TipoReuniaoRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(reuniao_repository_1.ReuniaoRepository)),
    __metadata("design:paramtypes", [tipo_reuniao_repository_1.TipoReuniaoRepository,
        reuniao_repository_1.ReuniaoRepository])
], TipoReuniaoService);
exports.TipoReuniaoService = TipoReuniaoService;
//# sourceMappingURL=tipo-reuniao.service.js.map