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
exports.LaboratoriumService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const radiologi_entity_1 = require("./radiologi.entity");
const promises_1 = require("fs/promises");
const path_1 = require("path");
let LaboratoriumService = class LaboratoriumService {
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
        const laboratorium = await this.repo.findOneBy({ id });
        if (!laboratorium) {
            throw new common_1.BadRequestException('Laboratorium not found');
        }
        if (data.gambarlaboratorium && laboratorium.gambarlaboratorium) {
            const oldFilePath = (0, path_1.join)(__dirname, '..', '..', 'uploads', 'laboratorium', laboratorium.gambarlaboratorium);
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
        const laboratorium = await this.repo.findOneBy({ id });
        if (!laboratorium)
            throw new common_1.BadRequestException('Laboratorium not found');
        if (laboratorium.gambarlaboratorium) {
            const filepath = (0, path_1.join)(__dirname, '..', '..', 'uploads', 'laboratorium', laboratorium.gambarlaboratorium);
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
exports.LaboratoriumService = LaboratoriumService;
exports.LaboratoriumService = LaboratoriumService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(radiologi_entity_1.Laboratorium)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LaboratoriumService);
//# sourceMappingURL=laboratorium.service.js.map