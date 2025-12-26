import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DokterService } from './dokter.service';
import { DokterController } from './dokter.controller';
import { Dokter } from './dokter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dokter])],
  providers: [DokterService],
  controllers: [DokterController],
})
export class DokterModule {}
