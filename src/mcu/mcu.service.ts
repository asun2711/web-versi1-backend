import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mcu } from './mcu.entity';
import { unlink } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class McuService {
  constructor(@InjectRepository(Mcu) private repo: Repository<Mcu>) {}

  create(data: Partial<Mcu>) {
    return this.repo.save(data);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, data: Partial<Mcu>) {
    const mcu = await this.repo.findOneBy({ id });
    if (!mcu) {
      throw new BadRequestException('Mcu not found');
    }

    // Jika ada upload file logo baru, hapus gambar lama dari folder uploads
    if (data.gambarmcu && mcu.gambarmcu) {
      const oldFilePath = join(__dirname, '..', '..', 'uploads','mcu', mcu.gambarmcu);
      try {
        await unlink(oldFilePath);
      } catch (err) {
        // Jika file tidak ditemukan atau gagal dihapus, log error saja
        console.error('Gagal hapus file logo lama:', err.message);
      }
    }

    return this.repo.update(id, data);
  }

  async remove(id: number) {
    const mcu = await this.repo.findOneBy({ id });
    if (!mcu) throw new BadRequestException('Mcu not found');

    // Hapus file logo dari filesystem jika ada
    if (mcu.gambarmcu) {
      const filepath = join(__dirname, '..', '..', 'uploads','mcu', mcu.gambarmcu);
      try {
        await unlink(filepath);
      } catch (err) {
        console.error('Gagal hapus file logo:', err.message);
      }
    }

    return this.repo.delete(id);
  }
}
