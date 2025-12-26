import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Berita } from './berita.entity';
import { unlink } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class BeritaService {
  constructor(@InjectRepository(Berita) private repo: Repository<Berita>) {}

  create(data: Partial<Berita>) {
    return this.repo.save(data);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, data: Partial<Berita>) {
    const berita = await this.repo.findOneBy({ id });
    if (!berita) {
      throw new BadRequestException('Berita not found');
    }

    // Jika ada upload file logo baru, hapus gambar lama dari folder uploads
    if (data.gambarberita && berita.gambarberita) {
      const oldFilePath = join(__dirname, '..', '..', 'uploads','berita', berita.gambarberita);
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
    const berita = await this.repo.findOneBy({ id });
    if (!berita) throw new BadRequestException('Berita not found');

    // Hapus file logo dari filesystem jika ada
    if (berita.gambarberita) {
      const filepath = join(__dirname, '..', '..', 'uploads','berita', berita.gambarberita);
      try {
        await unlink(filepath);
      } catch (err) {
        console.error('Gagal hapus file logo:', err.message);
      }
    }

    return this.repo.delete(id);
  }
}
