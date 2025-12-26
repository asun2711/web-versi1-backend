"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SosialMediaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sosialmedia_service_1 = require("./sosialmedia.service");
const sosialmedia_controller_1 = require("./sosialmedia.controller");
const sosialmedia_entity_1 = require("./sosialmedia.entity");
let SosialMediaModule = class SosialMediaModule {
};
exports.SosialMediaModule = SosialMediaModule;
exports.SosialMediaModule = SosialMediaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sosialmedia_entity_1.SosialMedia])],
        providers: [sosialmedia_service_1.SosialMediaService],
        controllers: [sosialmedia_controller_1.SosialMediaController],
    })
], SosialMediaModule);
//# sourceMappingURL=sosialmedia.module.js.map