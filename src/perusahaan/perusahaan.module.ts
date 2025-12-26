import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerusahaanService } from './perusahaan.service';
import { PerusahaanController } from './perusahaan.controller';
import { Perusahaan } from './perusahaan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Perusahaan])],
  providers: [PerusahaanService],
  controllers: [PerusahaanController],
})
export class PerusahaanModule {}
