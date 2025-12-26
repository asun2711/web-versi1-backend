import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StrukturService } from './struktur.service';
import { StrukturController } from './struktur.controller';
import { Struktur } from './struktur.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Struktur])],
  providers: [StrukturService],
  controllers: [StrukturController],
})
export class StrukturModule {}
