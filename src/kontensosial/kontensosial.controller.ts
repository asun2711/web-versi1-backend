import { Controller, Get, Post, Put, Delete, Body, Param, BadRequestException } from '@nestjs/common';
import { KontenSosialService } from './kontensosial.service';

@Controller('api/datakontensosial')
export class KontenSosialController {
  constructor(private readonly service: KontenSosialService) {}

  @Get()
  findAll() { return this.service.findAll(); }

  @Get(':id')
  findOne(@Param('id') id: string) { return this.service.findOne(+id); }

  @Post()
  async create(@Body() data: any) {
    try {
      return await this.service.create({
        namakontensosial: data.namakontensosial,
        kontenusername: data.kontenusername,
        isikonten: data.isikonten,
      });
    } catch (error) {
      throw new BadRequestException('Gagal menyimpan konten sosial: ' + error.message);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: any) {
    try {
      return await this.service.update(+id, {
        namakontensosial: data.namakontensosial,
        kontenusername: data.kontenusername,
        isikonten: data.isikonten,
      });
    } catch (error) {
      throw new BadRequestException('Gagal mengupdate konten sosial: ' + error.message);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.service.remove(+id);
    } catch (error) {
      throw new BadRequestException('Gagal menghapus konten sosial: ' + error.message);
    }
  }
}
