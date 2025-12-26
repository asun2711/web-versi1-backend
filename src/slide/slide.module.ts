import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SlideService } from './slide.service';
import { SlideController } from './slide.controller';
import { Slide } from './slide.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Slide])],
  providers: [SlideService],
  controllers: [SlideController],
})
export class SlideModule {}
