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
exports.ReuniaoPessoaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const reuniao_pessoa_repository_1 = require("../repositories/reuniao-pessoa.repository");
const reuniao_pessoa_dto_1 = require("../models/dto/reuniao-pessoa.dto");
const reuniao_pessoa_entity_1 = require("../models/entities/reuniao-pessoa.entity");
const pessoa_entity_1 = require("../models/entities/pessoa.entity");
const reuniao_entity_1 = require("../models/entities/reuniao.entity");
let ReuniaoPessoaService = class ReuniaoPessoaService {
    constructor(repository) {
        this.repository = repository;
    }
    async salvar(dto) {
        let entidade = new reuniao_pessoa_entity_1.ReuniaoPessoa();
        const pessoa = new pessoa_entity_1.Pessoa();
        const reuniao = new reuniao_entity_1.Reuniao();
        pessoa.id = dto.pessoaId;
        reuniao.id = dto.reuniaoId;
        const chamada = await this.findByField({ where: { reuniao: reuniao, pessoa: pessoa } });
        chamada ? entidade.id = chamada.id : entidade.id = null;
        entidade.justificativa = dto.justificativa;
        entidade.pessoa = pessoa;
        entidade.reuniao = reuniao;
        entidade.status = dto.status;
        this.repository.save(entidade);
        return { statusCode: 200, message: 'Ok' };
    }
    async salvarTodos(dto) {
        let entidades = [];
        if (dto.length > 0) {
            dto.forEach(it => {
                let reuniaoPessoa = new reuniao_pessoa_entity_1.ReuniaoPessoa();
                reuniaoPessoa.justificativa = it.justificativa;
                const pessoa = new pessoa_entity_1.Pessoa();
                const reuniao = new reuniao_entity_1.Reuniao();
                pessoa.id = it.pessoaId;
                reuniao.id = it.reuniaoId;
                reuniaoPessoa.pessoa = pessoa;
                reuniaoPessoa.reuniao = reuniao;
                reuniaoPessoa.status = it.status;
                entidades.push(reuniaoPessoa);
            });
            this.repository.save(entidades);
        }
        return { statusCode: 200, message: 'Chamada realizada com sucesso' };
    }
    async findAll(reuniaoId) {
        const chamada = await this.findByFields({ where: { reuniao: { id: reuniaoId } } });
        let res = [];
        chamada.forEach(it => {
            let reuniaoPessoa = new reuniao_pessoa_dto_1.ReuniaoPessoaDto(it);
            reuniaoPessoa.reuniaoId = it.reuniao.id;
            reuniaoPessoa.pessoaId = it.pessoa.id;
            res.push(reuniaoPessoa);
        });
        return res;
    }
    async findByFields(options) {
        options.relations = ['pessoa', 'reuniao'];
        return await this.repository.find(options);
    }
    async findByField(options) {
        options.relations = ['pessoa', 'reuniao'];
        return await this.repository.findOne(options);
    }
};
ReuniaoPessoaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reuniao_pessoa_repository_1.ReuniaoPessoaRepository)),
    __metadata("design:paramtypes", [reuniao_pessoa_repository_1.ReuniaoPessoaRepository])
], ReuniaoPessoaService);
exports.ReuniaoPessoaService = ReuniaoPessoaService;
//# sourceMappingURL=reuniao-pessoa.service.js.map