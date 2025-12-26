import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatnerService } from './patner.service';
import { PatnerController } from './patner.controller';
import { Patner } from './patner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Patner])],
  providers: [PatnerService],
  controllers: [PatnerController],
})
export class PatnerModule {}
