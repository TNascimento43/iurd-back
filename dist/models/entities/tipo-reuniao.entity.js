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
exports.TipoReuniao = void 0;
const typeorm_1 = require("typeorm");
let TipoReuniao = class TipoReuniao extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], TipoReuniao.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nome', nullable: false, type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], TipoReuniao.prototype, "nome", void 0);
TipoReuniao = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(['nome'])
], TipoReuniao);
exports.TipoReuniao = TipoReuniao;
//# sourceMappingURL=tipo-reuniao.entity.js.map