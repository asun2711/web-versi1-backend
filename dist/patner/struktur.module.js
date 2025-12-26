"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatnerModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const patner_service_1 = require("./patner.service");
const patner_controller_1 = require("./patner.controller");
const patner_entity_1 = require("./patner.entity");
let PatnerModule = class PatnerModule {
};
exports.PatnerModule = PatnerModule;
exports.PatnerModule = PatnerModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([patner_entity_1.Patner])],
        providers: [patner_service_1.PatnerService],
        controllers: [patner_controller_1.PatnerController],
    })
], PatnerModule);
//# sourceMappingURL=struktur.module.js.map