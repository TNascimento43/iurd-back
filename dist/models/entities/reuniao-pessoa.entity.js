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
exports.ReuniaoPessoa = void 0;
const typeorm_1 = require("typeorm");
const reuniao_entity_1 = require("./reuniao.entity");
const pessoa_entity_1 = require("./pessoa.entity");
const status_presenca_enum_1 = require("../enums/status-presenca.enum");
let ReuniaoPessoa = class ReuniaoPessoa extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ReuniaoPessoa.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'justificativa', nullable: true, type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ReuniaoPessoa.prototype, "justificativa", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', type: "text", enum: status_presenca_enum_1.StatusPresencaEnum }),
    __metadata("design:type", Number)
], ReuniaoPessoa.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: "reuniao_id" }),
    (0, typeorm_1.ManyToOne)(type => reuniao_entity_1.Reuniao),
    __metadata("design:type", reuniao_entity_1.Reuniao)
], ReuniaoPessoa.prototype, "reuniao", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: "pessoa_id" }),
    (0, typeorm_1.ManyToOne)(type => pessoa_entity_1.Pessoa),
    __metadata("design:type", pessoa_entity_1.Pessoa)
], ReuniaoPessoa.prototype, "pessoa", void 0);
ReuniaoPessoa = __decorate([
    (0, typeorm_1.Entity)()
], ReuniaoPessoa);
exports.ReuniaoPessoa = ReuniaoPessoa;
//# sourceMappingURL=reuniao-pessoa.entity.js.map