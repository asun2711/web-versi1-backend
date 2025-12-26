import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LaboratoriumService } from './laboratorium.service';
import { LaboratoriumController } from './laboratorium.controller';
import { Laboratorium } from './laboratorium.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Laboratorium])],
  providers: [LaboratoriumService],
  controllers: [LaboratoriumController],
})
export class LaboratoriumModule {}
