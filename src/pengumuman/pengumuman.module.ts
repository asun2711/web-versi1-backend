import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PengumumanService } from './pengumuman.service';
import { PengumumanController } from './pengumuman.controller';
import { Pengumuman } from './pengumuman.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pengumuman])],
  providers: [PengumumanService],
  controllers: [PengumumanController],
})
export class PengumumanModule {}
