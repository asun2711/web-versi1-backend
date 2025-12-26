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
exports.BeritaController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const berita_service_1 = require("./berita.service");
let BeritaController = class BeritaController {
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
    async create(data, file) {
        try {
            if (file) {
                data.gambarberita = file.filename;
            }
            return await this.service.create(data);
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to save berita data: ' + error.message);
        }
    }
    async update(id, data, file) {
        try {
            if (file) {
                data.gambarberita = file.filename;
            }
            return await this.service.update(+id, data);
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to update berita data: ' + error.message);
        }
    }
    async remove(id) {
        try {
            return await this.service.remove(+id);
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to remove berita data: ' + error.message);
        }
    }
};
exports.BeritaController = BeritaController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BeritaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BeritaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('gambarberita', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/berita',
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const ext = (0, path_1.extname)(file.originalname);
                callback(null, `${uniqueSuffix}${ext}`);
            },
        }),
        fileFilter: (req, file, callback) => {
            const allowedTypes = /jpg|jpeg|png|gif/;
            const mimetype = allowedTypes.test(file.mimetype);
            const extnameCheck = allowedTypes.test((0, path_1.extname)(file.originalname).toLowerCase());
            if (mimetype && extnameCheck) {
                callback(null, true);
            }
            else {
                callback(new common_1.BadRequestException('Only image files are allowed!'), false);
            }
        },
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BeritaController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('gambarberita', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/berita',
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const ext = (0, path_1.extname)(file.originalname);
                callback(null, `${uniqueSuffix}${ext}`);
            },
        }),
        fileFilter: (req, file, callback) => {
            const allowedTypes = /jpg|jpeg|png|gif/;
            const mimetype = allowedTypes.test(file.mimetype);
            const extnameCheck = allowedTypes.test((0, path_1.extname)(file.originalname).toLowerCase());
            if (mimetype && extnameCheck) {
                callback(null, true);
            }
            else {
                callback(new common_1.BadRequestException('Only image files are allowed!'), false);
            }
        },
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], BeritaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BeritaController.prototype, "remove", null);
exports.BeritaController = BeritaController = __decorate([
    (0, common_1.Controller)('api/databerita'),
    __metadata("design:paramtypes", [berita_service_1.BeritaService])
], BeritaController);
//# sourceMappingURL=berita.controller.js.map