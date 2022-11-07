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
exports.ReuniaoPessoaController = void 0;
const common_1 = require("@nestjs/common");
const reuniao_pessoa_service_1 = require("../services/reuniao-pessoa.service");
const reuniao_pessoa_dto_1 = require("../models/dto/reuniao-pessoa.dto");
let ReuniaoPessoaController = class ReuniaoPessoaController {
    constructor(service) {
        this.service = service;
        this.logger = new common_1.Logger('ReuniaoPessoaController');
    }
    async getAll(id) {
        return this.service.findAll(id);
    }
    async save(data) {
        return this.service.salvar(data);
    }
};
__decorate([
    (0, common_1.Get)('/reuniao/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReuniaoPessoaController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reuniao_pessoa_dto_1.ReuniaoPessoaDto]),
    __metadata("design:returntype", Promise)
], ReuniaoPessoaController.prototype, "save", null);
ReuniaoPessoaController = __decorate([
    (0, common_1.Controller)('/api/reuniao-pessoa'),
    __metadata("design:paramtypes", [reuniao_pessoa_service_1.ReuniaoPessoaService])
], ReuniaoPessoaController);
exports.ReuniaoPessoaController = ReuniaoPessoaController;
//# sourceMappingURL=reuniao-pessoa.controller.js.map