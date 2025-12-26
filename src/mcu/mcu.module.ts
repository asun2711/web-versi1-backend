import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { McuService } from './mcu.service';
import { McuController } from './mcu.controller';
import { Mcu } from './mcu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mcu])],
  providers: [McuService],
  controllers: [McuController],
})
export class McuModule {}
