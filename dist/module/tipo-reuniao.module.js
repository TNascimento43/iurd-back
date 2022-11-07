"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoReuniaoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tipo_reuniao_controller_1 = require("../controller/tipo-reuniao.controller");
const tipo_reuniao_service_1 = require("../services/tipo-reuniao.service");
const tipo_reuniao_repository_1 = require("../repositories/tipo-reuniao.repository");
const reuniao_repository_1 = require("../repositories/reuniao.repository");
let TipoReuniaoModule = class TipoReuniaoModule {
};
TipoReuniaoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tipo_reuniao_repository_1.TipoReuniaoRepository, reuniao_repository_1.ReuniaoRepository])],
        controllers: [tipo_reuniao_controller_1.TipoReuniaoController],
        providers: [tipo_reuniao_service_1.TipoReuniaoService],
        exports: [tipo_reuniao_service_1.TipoReuniaoService]
    })
], TipoReuniaoModule);
exports.TipoReuniaoModule = TipoReuniaoModule;
//# sourceMappingURL=tipo-reuniao.module.js.map