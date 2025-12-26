import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KontenSosialService } from './kontensosial.service';
import { KontenSosialController } from './kontensosial.controller';
import { KontenSosial } from './kontensosial.entity';

@Module({
  imports: [TypeOrmModule.forFeature([KontenSosial])],
  providers: [KontenSosialService],
  controllers: [KontenSosialController],
})
export class KontenSosialModule {}
