import { Controller, Post, Get, Patch, Delete, Param, Body, BadRequestException, NotFoundException } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from './contact.entity';

@Controller('api/datacontact')
export class ContactController {
  constructor(private readonly service: ContactService) {}

  @Post()
  async create(@Body() data: Partial<Contact>) {
    try {
      return await this.service.create(data);
    } catch (error) {
      throw new BadRequestException('Gagal menyimpan data contact: ' + error.message);
    }
  }

  @Get()
  async findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const contact = await this.service.findOne(id);
    if (!contact) {
      throw new NotFoundException(`Contact dengan id ${id} tidak ditemukan`);
    }
    return contact;
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() data: Partial<Contact>) {
    try {
      return await this.service.update(id, data);
    } catch (error) {
      throw new BadRequestException('Gagal mengupdate data: ' + error.message);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    try {
      await this.service.remove(id);
      return { message: 'Data berhasil dihapus' };
    } catch (error) {
      throw new BadRequestException('Gagal menghapus data: ' + error.message);
    }
  }
}
