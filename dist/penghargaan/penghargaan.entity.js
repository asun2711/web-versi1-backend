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
exports.Penghargaan = void 0;
const typeorm_1 = require("typeorm");
let Penghargaan = class Penghargaan {
    id;
    judulpenghargaan;
    isipenghargaan;
    tanggalpenghargaan;
    namauploader;
    gambarpenghargaan;
};
exports.Penghargaan = Penghargaan;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Penghargaan.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Penghargaan.prototype, "judulpenghargaan", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Penghargaan.prototype, "isipenghargaan", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Penghargaan.prototype, "tanggalpenghargaan", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Penghargaan.prototype, "namauploader", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Penghargaan.prototype, "gambarpenghargaan", void 0);
exports.Penghargaan = Penghargaan = __decorate([
    (0, typeorm_1.Entity)()
], Penghargaan);
//# sourceMappingURL=penghargaan.entity.js.map