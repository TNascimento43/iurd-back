"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReuniaoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const reuniao_controller_1 = require("../controller/reuniao.controller");
const reuniao_service_1 = require("../services/reuniao.service");
const reuniao_repository_1 = require("../repositories/reuniao.repository");
const tipo_reuniao_service_1 = require("../services/tipo-reuniao.service");
const tipo_reuniao_repository_1 = require("../repositories/tipo-reuniao.repository");
let ReuniaoModule = class ReuniaoModule {
};
ReuniaoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([reuniao_repository_1.ReuniaoRepository, tipo_reuniao_repository_1.TipoReuniaoRepository])],
        controllers: [reuniao_controller_1.ReuniaoController],
        providers: [reuniao_service_1.ReuniaoService, tipo_reuniao_service_1.TipoReuniaoService],
        exports: [reuniao_service_1.ReuniaoService]
    })
], ReuniaoModule);
exports.ReuniaoModule = ReuniaoModule;
//# sourceMappingURL=reuniao.module.js.map