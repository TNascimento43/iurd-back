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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reuniao = void 0;
const typeorm_1 = require("typeorm");
const tipo_reuniao_entity_1 = require("./tipo-reuniao.entity");
let Reuniao = class Reuniao extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Reuniao.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'data', nullable: false, type: 'date' }),
    __metadata("design:type", Date)
], Reuniao.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: "tipo_reuniao_id" }),
    (0, typeorm_1.ManyToOne)(type => tipo_reuniao_entity_1.TipoReuniao),
    __metadata("design:type", tipo_reuniao_entity_1.TipoReuniao)
], Reuniao.prototype, "tipoReuniao", void 0);
Reuniao = __decorate([
    (0, typeorm_1.Entity)()
], Reuniao);
exports.Reuniao = Reuniao;
//# sourceMappingURL=reuniao.entity.js.map