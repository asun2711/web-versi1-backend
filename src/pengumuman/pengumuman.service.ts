import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pengumuman } from './pengumuman.entity';
import { unlink } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class PengumumanService {
  constructor(@InjectRepository(Pengumuman) private repo: Repository<Pengumuman>) {}

  create(data: Partial<Pengumuman>) {
    return this.repo.save(data);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, data: Partial<Pengumuman>) {
    const pengumuman = await this.repo.findOneBy({ id });
    if (!pengumuman) {
      throw new BadRequestException('Pengumuman not found');
    }

    // Jika ada upload file logo baru, hapus gambar lama dari folder uploads
    if (data.gambarpengumuman && pengumuman.gambarpengumuman) {
      const oldFilePath = join(__dirname, '..', '..', 'uploads','pengumuman', pengumuman.gambarpengumuman);
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
    const pengumuman = await this.repo.findOneBy({ id });
    if (!pengumuman) throw new BadRequestException('Pengumuman not found');

    // Hapus file logo dari filesystem jika ada
    if (pengumuman.gambarpengumuman) {
      const filepath = join(__dirname, '..', '..', 'uploads','pengumuman', pengumuman.gambarpengumuman);
      try {
        await unlink(filepath);
      } catch (err) {
        console.error('Gagal hapus file logo:', err.message);
      }
    }

    return this.repo.delete(id);
  }
}
