"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerusahaanModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const perusahaan_service_1 = require("./perusahaan.service");
const perusahaan_controller_1 = require("./perusahaan.controller");
const perusahaan_entity_1 = require("./perusahaan.entity");
let PerusahaanModule = class PerusahaanModule {
};
exports.PerusahaanModule = PerusahaanModule;
exports.PerusahaanModule = PerusahaanModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([perusahaan_entity_1.Perusahaan])],
        providers: [perusahaan_service_1.PerusahaanService],
        controllers: [perusahaan_controller_1.PerusahaanController],
    })
], PerusahaanModule);
//# sourceMappingURL=perusahaan.module.js.map