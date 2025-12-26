import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PenghargaanService } from './penghargaan.service';
import { PenghargaanController } from './penghargaan.controller';
import { Penghargaan } from './penghargaan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Penghargaan])],
  providers: [PenghargaanService],
  controllers: [PenghargaanController],
})
export class PenghargaanModule {}
