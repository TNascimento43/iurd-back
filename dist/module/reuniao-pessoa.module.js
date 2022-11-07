"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReuniaoPessoaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const reuniao_pessoa_controller_1 = require("../controller/reuniao-pessoa.controller");
const reuniao_pessoa_repository_1 = require("../repositories/reuniao-pessoa.repository");
const reuniao_pessoa_service_1 = require("../services/reuniao-pessoa.service");
let ReuniaoPessoaModule = class ReuniaoPessoaModule {
};
ReuniaoPessoaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([reuniao_pessoa_repository_1.ReuniaoPessoaRepository])],
        controllers: [reuniao_pessoa_controller_1.ReuniaoPessoaController],
        providers: [reuniao_pessoa_service_1.ReuniaoPessoaService],
        exports: [reuniao_pessoa_service_1.ReuniaoPessoaService]
    })
], ReuniaoPessoaModule);
exports.ReuniaoPessoaModule = ReuniaoPessoaModule;
//# sourceMappingURL=reuniao-pessoa.module.js.map