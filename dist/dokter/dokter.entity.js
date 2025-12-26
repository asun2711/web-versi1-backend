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
exports.Dokter = void 0;
const typeorm_1 = require("typeorm");
const spesialis_entity_1 = require("../spesialis/spesialis.entity");
let Dokter = class Dokter {
    id;
    namadokter;
    gelardokter;
    jadwaldokter;
    sertifikatstrdokter;
    sertifikatsipdokter;
    gambardokter;
    spesialis;
    spesialisId;
};
exports.Dokter = Dokter;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Dokter.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Dokter.prototype, "namadokter", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Dokter.prototype, "gelardokter", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Dokter.prototype, "jadwaldokter", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Dokter.prototype, "sertifikatstrdokter", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Dokter.prototype, "sertifikatsipdokter", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Dokter.prototype, "gambardokter", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => spesialis_entity_1.Spesialis, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'spesialisId' }),
    __metadata("design:type", spesialis_entity_1.Spesialis)
], Dokter.prototype, "spesialis", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Dokter.prototype, "spesialisId", void 0);
exports.Dokter = Dokter = __decorate([
    (0, typeorm_1.Entity)()
], Dokter);
//# sourceMappingURL=dokter.entity.js.map