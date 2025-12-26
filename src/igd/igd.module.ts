import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IgdService } from './igd.service';
import { IgdController } from './igd.controller';
import { Igd } from './igd.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Igd])],
  providers: [IgdService],
  controllers: [IgdController],
})
export class IgdModule {}
