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
exports.PessoaService = void 0;
const common_1 = require("@nestjs/common");
const pessoa_repository_1 = require("../repositories/pessoa.repository");
const pessoa_dto_1 = require("../models/dto/pessoa.dto");
const typeorm_1 = require("@nestjs/typeorm");
const pessoa_entity_1 = require("../models/entities/pessoa.entity");
let PessoaService = class PessoaService {
    constructor(repository) {
        this.repository = repository;
    }
    async alteraStatus(id) {
        let entity = await this.findByFields({ where: { id: id } });
        if (entity) {
            entity.ativo = !entity.ativo;
            await this.repository.save(entity);
            return entity.ativo ?
                { statusCode: 200, message: 'Ativado com sucesso' } :
                { statusCode: 201, message: 'Inativado com sucesso' };
        }
        return { statusCode: 400, message: 'Pessoa não encontrada' };
    }
    async findAll() {
        const pessoas = await this.repository.find();
        return pessoas.map(it => new pessoa_dto_1.PessoaDto(it));
    }
    async findOne(id) {
        const entity = await this.findByFields({ where: { id: id } });
        if (!entity) {
            return null;
        }
        return new pessoa_dto_1.PessoaDto(entity);
    }
    async save(dto) {
        let entityExistent = new pessoa_entity_1.Pessoa();
        let entity = new pessoa_entity_1.Pessoa();
        let isExistent = false;
        if (dto.email) {
            entityExistent = await this.findByFields({ where: { email: dto.email } });
            entity = Object.assign({}, entityExistent);
            isExistent = !!entity.id;
        }
        entity = Object.assign(entity, dto);
        await this.repository.save(entity);
        return isExistent ?
            { statusCode: 200, message: 'Dados atualizado com sucesso' } :
            { statusCode: 201, message: 'Dados cadastrados com sucesso' };
    }
    async findByFields(options) {
        options.relations = [];
        const result = await this.repository.findOne(options);
        return result;
    }
};
PessoaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pessoa_repository_1.PessoaRepository)),
    __metadata("design:paramtypes", [pessoa_repository_1.PessoaRepository])
], PessoaService);
exports.PessoaService = PessoaService;
//# sourceMappingURL=pessoa.service.js.map