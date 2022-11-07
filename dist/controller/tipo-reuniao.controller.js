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
exports.TipoReuniaoController = void 0;
const common_1 = require("@nestjs/common");
const tipo_reuniao_service_1 = require("../services/tipo-reuniao.service");
const tipo_reuniao_dto_1 = require("../models/dto/tipo-reuniao.dto");
let TipoReuniaoController = class TipoReuniaoController {
    constructor(service) {
        this.service = service;
        this.logger = new common_1.Logger('TipoReuniaoController');
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
    async detelar(id) {
        return this.service.deletar(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TipoReuniaoController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tipo_reuniao_dto_1.TipoReuniaoDto]),
    __metadata("design:returntype", Promise)
], TipoReuniaoController.prototype, "save", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TipoReuniaoController.prototype, "getById", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TipoReuniaoController.prototype, "detelar", null);
TipoReuniaoController = __decorate([
    (0, common_1.Controller)('/api/tipo-reuniao'),
    __metadata("design:paramtypes", [tipo_reuniao_service_1.TipoReuniaoService])
], TipoReuniaoController);
exports.TipoReuniaoController = TipoReuniaoController;
//# sourceMappingURL=tipo-reuniao.controller.js.map