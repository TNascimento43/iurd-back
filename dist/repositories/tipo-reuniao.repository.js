"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoReuniaoRepository = void 0;
const typeorm_1 = require("typeorm");
const tipo_reuniao_entity_1 = require("../models/entities/tipo-reuniao.entity");
let TipoReuniaoRepository = class TipoReuniaoRepository extends typeorm_1.Repository {
};
TipoReuniaoRepository = __decorate([
    (0, typeorm_1.EntityRepository)(tipo_reuniao_entity_1.TipoReuniao)
], TipoReuniaoRepository);
exports.TipoReuniaoRepository = TipoReuniaoRepository;
//# sourceMappingURL=tipo-reuniao.repository.js.map