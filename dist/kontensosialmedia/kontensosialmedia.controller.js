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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.KontenSosialMediaController = void 0;
const common_1 = require("@nestjs/common");
const kontensosial_service_1 = require("./kontensosial.service");
let KontenSosialMediaController = class KontenSosialMediaController {
    service;
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(id) {
        return this.service.findOne(+id);
    }
    async create(data) {
        try {
            return await this.service.create(data);
        }
        catch (error) {
            throw new common_1.BadRequestException('Gagal menyimpan data: ' + error.message);
        }
    }
    async update(id, data) {
        try {
            return await this.service.update(+id, data);
        }
        catch (error) {
            throw new common_1.BadRequestException('Gagal mengupdate data: ' + error.message);
        }
    }
    async remove(id) {
        try {
            return await this.service.remove(+id);
        }
        catch (error) {
            throw new common_1.BadRequestException('Gagal menghapus data: ' + error.message);
        }
    }
};
exports.KontenSosialMediaController = KontenSosialMediaController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], KontenSosialMediaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KontenSosialMediaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], KontenSosialMediaController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], KontenSosialMediaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], KontenSosialMediaController.prototype, "remove", null);
exports.KontenSosialMediaController = KontenSosialMediaController = __decorate([
    (0, common_1.Controller)('api/datakontensosial'),
    __metadata("design:paramtypes", [typeof (_a = typeof kontensosial_service_1.KontenSosialMediaService !== "undefined" && kontensosial_service_1.KontenSosialMediaService) === "function" ? _a : Object])
], KontenSosialMediaController);
//# sourceMappingURL=kontensosialmedia.controller.js.map