import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RawatInapService } from './rawatinap.service';
import { RawatInapController } from './rawatinap.controller';
import { RawatInap } from './rawatinap.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RawatInap])],
  providers: [RawatInapService],
  controllers: [RawatInapController],
})
export class RawatInapModule {}
