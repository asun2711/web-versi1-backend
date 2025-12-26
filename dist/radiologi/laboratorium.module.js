"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaboratoriumModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const laboratorium_service_1 = require("./laboratorium.service");
const laboratorium_controller_1 = require("./laboratorium.controller");
const laboratorium_entity_1 = require("./laboratorium.entity");
let LaboratoriumModule = class LaboratoriumModule {
};
exports.LaboratoriumModule = LaboratoriumModule;
exports.LaboratoriumModule = LaboratoriumModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([laboratorium_entity_1.Laboratorium])],
        providers: [laboratorium_service_1.LaboratoriumService],
        controllers: [laboratorium_controller_1.LaboratoriumController],
    })
], LaboratoriumModule);
//# sourceMappingURL=laboratorium.module.js.map