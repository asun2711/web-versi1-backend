"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const perusahaan_module_1 = require("./perusahaan/perusahaan.module");
const sejarah_module_1 = require("./sejarah/sejarah.module");
const struktur_module_1 = require("./struktur/struktur.module");
const patner_module_1 = require("./patner/patner.module");
const sosialmedia_module_1 = require("./sosialmedia/sosialmedia.module");
const kontensosial_module_1 = require("./kontensosial/kontensosial.module");
const slide_module_1 = require("./slide/slide.module");
const berita_module_1 = require("./berita/berita.module");
const pengumuman_module_1 = require("./pengumuman/pengumuman.module");
const penghargaan_module_1 = require("./penghargaan/penghargaan.module");
const spesialis_module_1 = require("./spesialis/spesialis.module");
const dokter_module_1 = require("./dokter/dokter.module");
const rawatjalan_module_1 = require("./rawatjalan/rawatjalan.module");
const rawatinap_module_1 = require("./rawatinap/rawatinap.module");
const laboratorium_module_1 = require("./laboratorium/laboratorium.module");
const radiologi_module_1 = require("./radiologi/radiologi.module");
const igd_module_1 = require("./igd/igd.module");
const mcu_module_1 = require("./mcu/mcu.module");
const contact_module_1 = require("./contact/contact.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 2799,
                username: 'postgres',
                password: '@$Un271199',
                database: 'website_developer',
                autoLoadEntities: true,
                synchronize: true,
            }),
            perusahaan_module_1.PerusahaanModule,
            sejarah_module_1.SejarahModule,
            struktur_module_1.StrukturModule,
            slide_module_1.SlideModule,
            berita_module_1.BeritaModule,
            pengumuman_module_1.PengumumanModule,
            penghargaan_module_1.PenghargaanModule,
            spesialis_module_1.SpesialisModule,
            dokter_module_1.DokterModule,
            rawatjalan_module_1.RawatJalanModule,
            rawatinap_module_1.RawatInapModule,
            laboratorium_module_1.LaboratoriumModule,
            radiologi_module_1.RadiologiModule,
            igd_module_1.IgdModule,
            contact_module_1.ContactModule,
            patner_module_1.PatnerModule,
            sosialmedia_module_1.SosialMediaModule,
            kontensosial_module_1.KontenSosialModule,
            mcu_module_1.McuModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module%20copy.js.map