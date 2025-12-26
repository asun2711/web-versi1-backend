import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RawatJalanService } from './rawatjalan.service';
import { RawatJalanController } from './rawatjalan.controller';
import { RawatJalan } from './rawatjalan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RawatJalan])],
  providers: [RawatJalanService],
  controllers: [RawatJalanController],
})
export class RawatJalanModule {}
