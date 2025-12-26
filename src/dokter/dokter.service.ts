import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dokter } from './dokter.entity';
import { unlink } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class DokterService {
  constructor(@InjectRepository(Dokter) private repo: Repository<Dokter>) {}

  create(data: Partial<Dokter>) {
    return this.repo.save(data);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, data: Partial<Dokter>) {
    const dokter = await this.repo.findOneBy({ id });
    if (!dokter) {
      throw new BadRequestException('Dokter not found');
    }

    // Jika ada upload file logo baru, hapus gambar lama dari folder uploads
    if (data.gambardokter && dokter.gambardokter) {
      const oldFilePath = join(__dirname, '..', '..', 'uploads','dokter', dokter.gambardokter);
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
    const dokter = await this.repo.findOneBy({ id });
    if (!dokter) throw new BadRequestException('Dokter not found');

    // Hapus file logo dari filesystem jika ada
    if (dokter.gambardokter) {
      const filepath = join(__dirname, '..', '..', 'uploads','dokter', dokter.gambardokter);
      try {
        await unlink(filepath);
      } catch (err) {
        console.error('Gagal hapus file logo:', err.message);
      }
    }

    return this.repo.delete(id);
  }
}
