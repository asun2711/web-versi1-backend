import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpesialisService } from './spesialis.service';
import { SpesialisController } from './spesialis.controller';
import { Spesialis } from './spesialis.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Spesialis])],
  providers: [SpesialisService],
  controllers: [SpesialisController],
})
export class SpesialisModule {}
