import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SosialMediaService } from './sosialmedia.service';
import { SosialMediaController } from './sosialmedia.controller';
import { SosialMedia } from './sosialmedia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SosialMedia])],
  providers: [SosialMediaService],
  controllers: [SosialMediaController],
})
export class SosialMediaModule {}
