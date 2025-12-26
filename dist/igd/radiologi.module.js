"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadiologiModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const radiologi_service_1 = require("./radiologi.service");
const igd_controller_1 = require("./igd.controller");
const igd_entity_1 = require("./igd.entity");
let RadiologiModule = class RadiologiModule {
};
exports.RadiologiModule = RadiologiModule;
exports.RadiologiModule = RadiologiModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([igd_entity_1.Radiologi])],
        providers: [radiologi_service_1.RadiologiService],
        controllers: [igd_controller_1.RadiologiController],
    })
], RadiologiModule);
//# sourceMappingURL=radiologi.module.js.map