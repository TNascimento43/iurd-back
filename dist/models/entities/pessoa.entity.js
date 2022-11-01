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
exports.Pessoa = void 0;
const typeorm_1 = require("typeorm");
const titulo_enum_1 = require("../enums/titulo.enum");
let Pessoa = class Pessoa extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", String)
], Pessoa.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nome', nullable: false, type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Pessoa.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email', nullable: true, type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Pessoa.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'telefone', nullable: true, type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Pessoa.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ativo', nullable: true, default: true }),
    __metadata("design:type", Boolean)
], Pessoa.prototype, "ativo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'data_nascimento', nullable: true }),
    __metadata("design:type", Date)
], Pessoa.prototype, "dataNascimento", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Pessoa.prototype, "criacao", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Pessoa.prototype, "atualizacao", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'titulo', type: "text", enum: titulo_enum_1.TituloEnum }),
    __metadata("design:type", Number)
], Pessoa.prototype, "titulo", void 0);
Pessoa = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(['email'])
], Pessoa);
exports.Pessoa = Pessoa;
//# sourceMappingURL=pessoa.entity.js.map