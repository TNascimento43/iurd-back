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
exports.PessoaController = void 0;
const common_1 = require("@nestjs/common");
const pessoa_service_1 = require("../services/pessoa.service");
const pessoa_dto_1 = require("../models/dto/pessoa.dto");
let PessoaController = class PessoaController {
    constructor(service) {
        this.service = service;
        this.logger = new common_1.Logger('PessoaController');
    }
    async getAll() {
        return this.service.findAll();
    }
    async save(data) {
        return this.service.save(data);
    }
    async getById(id) {
        return this.service.findOne(id);
    }
    async alteraStatus(id) {
        return this.service.alteraStatus(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pessoa_dto_1.PessoaDto]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "save", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "getById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "alteraStatus", null);
PessoaController = __decorate([
    (0, common_1.Controller)('/api/pessoa'),
    __metadata("design:paramtypes", [pessoa_service_1.PessoaService])
], PessoaController);
exports.PessoaController = PessoaController;
//# sourceMappingURL=pessoa.controller.js.map