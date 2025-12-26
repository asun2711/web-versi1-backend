import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Struktur } from './struktur.entity';
import { unlink } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class StrukturService {
  constructor(@InjectRepository(Struktur) private repo: Repository<Struktur>) {}

  create(data: Partial<Struktur>) {
    return this.repo.save(data);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, data: Partial<Struktur>) {
    const struktur = await this.repo.findOneBy({ id });
    if (!struktur) {
      throw new BadRequestException('Struktur not found');
    }

    // Jika ada upload file logo baru, hapus gambar lama dari folder uploads
    if (data.gambardireksi && struktur.gambardireksi) {
      const oldFilePath = join(__dirname, '..', '..', 'uploads','struktur', struktur.gambardireksi);
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
    const struktur = await this.repo.findOneBy({ id });
    if (!struktur) throw new BadRequestException('Struktur not found');

    // Hapus file logo dari filesystem jika ada
    if (struktur.gambardireksi) {
      const filepath = join(__dirname, '..', '..', 'uploads','struktur', struktur.gambardireksi);
      try {
        await unlink(filepath);
      } catch (err) {
        console.error('Gagal hapus file logo:', err.message);
      }
    }

    return this.repo.delete(id);
  }
}
