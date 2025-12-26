"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SejarahModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sejarah_service_1 = require("./sejarah.service");
const sejarah_controller_1 = require("./sejarah.controller");
const sejarah_entity_1 = require("./sejarah.entity");
let SejarahModule = class SejarahModule {
};
exports.SejarahModule = SejarahModule;
exports.SejarahModule = SejarahModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sejarah_entity_1.Sejarah])],
        providers: [sejarah_service_1.SejarahService],
        controllers: [sejarah_controller_1.SejarahController],
    })
], SejarahModule);
//# sourceMappingURL=sejarah.module.js.map