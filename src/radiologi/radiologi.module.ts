import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RadiologiService } from './radiologi.service';
import { RadiologiController } from './radiologi.controller';
import { Radiologi } from './radiologi.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Radiologi])],
  providers: [RadiologiService],
  controllers: [RadiologiController],
})
export class RadiologiModule {}
