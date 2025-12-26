"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawatJalanModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rawatjalan_service_1 = require("./rawatjalan.service");
const rawatjalan_controller_1 = require("./rawatjalan.controller");
const rawatjalan_entity_1 = require("./rawatjalan.entity");
let RawatJalanModule = class RawatJalanModule {
};
exports.RawatJalanModule = RawatJalanModule;
exports.RawatJalanModule = RawatJalanModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([rawatjalan_entity_1.RawatJalan])],
        providers: [rawatjalan_service_1.RawatJalanService],
        controllers: [rawatjalan_controller_1.RawatJalanController],
    })
], RawatJalanModule);
//# sourceMappingURL=rawatjalan.module.js.map