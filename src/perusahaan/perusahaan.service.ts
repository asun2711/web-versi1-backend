import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Perusahaan } from './perusahaan.entity';
import { unlink } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class PerusahaanService {
  constructor(@InjectRepository(Perusahaan) private repo: Repository<Perusahaan>) {}

  create(data: Partial<Perusahaan>) {
    return this.repo.save(data);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, data: Partial<Perusahaan>) {
    const perusahaan = await this.repo.findOneBy({ id });
    if (!perusahaan) {
      throw new BadRequestException('Perusahaan not found');
    }

    // Jika ada upload file logo baru, hapus gambar lama dari folder uploads
    if (data.logoperusahaan && perusahaan.logoperusahaan) {
      const oldFilePath = join(__dirname, '..', '..', 'uploads','perusahaan', perusahaan.logoperusahaan);
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
    const perusahaan = await this.repo.findOneBy({ id });
    if (!perusahaan) throw new BadRequestException('Perusahaan not found');

    // Hapus file logo dari filesystem jika ada
    if (perusahaan.logoperusahaan) {
      const filepath = join(__dirname, '..', '..', 'uploads','perusahaan', perusahaan.logoperusahaan);
      try {
        await unlink(filepath);
      } catch (err) {
        console.error('Gagal hapus file logo:', err.message);
      }
    }

    return this.repo.delete(id);
  }
}
