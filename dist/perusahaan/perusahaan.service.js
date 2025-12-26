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
exports.PerusahaanService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const perusahaan_entity_1 = require("./perusahaan.entity");
const promises_1 = require("fs/promises");
const path_1 = require("path");
let PerusahaanService = class PerusahaanService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    create(data) {
        return this.repo.save(data);
    }
    findAll() {
        return this.repo.find();
    }
    findOne(id) {
        return this.repo.findOneBy({ id });
    }
    async update(id, data) {
        const perusahaan = await this.repo.findOneBy({ id });
        if (!perusahaan) {
            throw new common_1.BadRequestException('Perusahaan not found');
        }
        if (data.logoperusahaan && perusahaan.logoperusahaan) {
            const oldFilePath = (0, path_1.join)(__dirname, '..', '..', 'uploads', 'perusahaan', perusahaan.logoperusahaan);
            try {
                await (0, promises_1.unlink)(oldFilePath);
            }
            catch (err) {
                console.error('Gagal hapus file logo lama:', err.message);
            }
        }
        return this.repo.update(id, data);
    }
    async remove(id) {
        const perusahaan = await this.repo.findOneBy({ id });
        if (!perusahaan)
            throw new common_1.BadRequestException('Perusahaan not found');
        if (perusahaan.logoperusahaan) {
            const filepath = (0, path_1.join)(__dirname, '..', '..', 'uploads', 'perusahaan', perusahaan.logoperusahaan);
            try {
                await (0, promises_1.unlink)(filepath);
            }
            catch (err) {
                console.error('Gagal hapus file logo:', err.message);
            }
        }
        return this.repo.delete(id);
    }
};
exports.PerusahaanService = PerusahaanService;
exports.PerusahaanService = PerusahaanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(perusahaan_entity_1.Perusahaan)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PerusahaanService);
//# sourceMappingURL=perusahaan.service.js.map