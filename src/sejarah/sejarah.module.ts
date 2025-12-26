import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SejarahService } from './sejarah.service';
import { SejarahController } from './sejarah.controller';
import { Sejarah } from './sejarah.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sejarah])],
  providers: [SejarahService],
  controllers: [SejarahController],
})
export class SejarahModule {}
