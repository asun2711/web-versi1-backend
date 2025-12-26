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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KontenSosialController = void 0;
const common_1 = require("@nestjs/common");
const kontensosial_service_1 = require("./kontensosial.service");
let KontenSosialController = class KontenSosialController {
    service;
    constructor(service) {
        this.service = service;
    }
    findAll() { return this.service.findAll(); }
    findOne(id) { return this.service.findOne(+id); }
    async create(data) {
        try {
            return await this.service.create({
                namakontensosial: data.namakontensosial,
                kontenusername: data.kontenusername,
                isikonten: data.isikonten,
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Gagal menyimpan konten sosial: ' + error.message);
        }
    }
    async update(id, data) {
        try {
            return await this.service.update(+id, {
                namakontensosial: data.namakontensosial,
                kontenusername: data.kontenusername,
                isikonten: data.isikonten,
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Gagal mengupdate konten sosial: ' + error.message);
        }
    }
    async remove(id) {
        try {
            return await this.service.remove(+id);
        }
        catch (error) {
            throw new common_1.BadRequestException('Gagal menghapus konten sosial: ' + error.message);
        }
    }
};
exports.KontenSosialController = KontenSosialController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], KontenSosialController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KontenSosialController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], KontenSosialController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], KontenSosialController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], KontenSosialController.prototype, "remove", null);
exports.KontenSosialController = KontenSosialController = __decorate([
    (0, common_1.Controller)('api/datakontensosial'),
    __metadata("design:paramtypes", [kontensosial_service_1.KontenSosialService])
], KontenSosialController);
//# sourceMappingURL=kontensosial.controller.js.map