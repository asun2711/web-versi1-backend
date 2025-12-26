import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BeritaService } from './berita.service';
import { BeritaController } from './berita.controller';
import { Berita } from './berita.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Berita])],
  providers: [BeritaService],
  controllers: [BeritaController],
})
export class BeritaModule {}
