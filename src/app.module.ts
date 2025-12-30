import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { PerusahaanModule } from './perusahaan/perusahaan.module';
import { SejarahModule } from './sejarah/sejarah.module';
import { StrukturModule } from './struktur/struktur.module';
import { PatnerModule } from './patner/patner.module';
import { SosialMediaModule } from './sosialmedia/sosialmedia.module';
import { KontenSosialModule } from './kontensosial/kontensosial.module';
import { SlideModule } from './slide/slide.module';
import { BeritaModule } from './berita/berita.module';
import { PengumumanModule } from './pengumuman/pengumuman.module';
import { PenghargaanModule } from './penghargaan/penghargaan.module';
import { SpesialisModule } from './spesialis/spesialis.module';
import { DokterModule } from './dokter/dokter.module';
import { RawatJalanModule } from './rawatjalan/rawatjalan.module';
import { RawatInapModule } from './rawatinap/rawatinap.module';
import { LaboratoriumModule } from './laboratorium/laboratorium.module';
import { RadiologiModule } from './radiologi/radiologi.module';
import { IgdModule } from './igd/igd.module';
import { McuModule } from './mcu/mcu.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    // =====================
    // LOAD ENV (.env)
    // =====================
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // =====================
    // DATABASE (TYPEORM)
    // =====================
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: Number(config.get<string>('DB_PORT')),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true,

        // AUTO OFF DI PRODUCTION
        // synchronize:
        //   config.get('NODE_ENV') !== 'production' ||
        //   process.env.FIRST_INIT === 'true',
      }),
    }),

    // =====================
    // FEATURE MODULES
    // =====================
    PerusahaanModule,
    SejarahModule,
    StrukturModule,
    SlideModule,
    BeritaModule,
    PengumumanModule,
    PenghargaanModule,
    SpesialisModule,
    DokterModule,
    RawatJalanModule,
    RawatInapModule,
    LaboratoriumModule,
    RadiologiModule,
    IgdModule,
    ContactModule,
    PatnerModule,
    SosialMediaModule,
    KontenSosialModule,
    McuModule,
  ],
})
export class AppModule {}
