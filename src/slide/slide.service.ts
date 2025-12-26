import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Slide } from './slide.entity';
import { unlink } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class SlideService {
  constructor(@InjectRepository(Slide) private repo: Repository<Slide>) {}

  create(data: Partial<Slide>) {
    return this.repo.save(data);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, data: Partial<Slide>) {
    const slide = await this.repo.findOneBy({ id });
    if (!slide) {
      throw new BadRequestException('Slide not found');
    }

    // Jika ada upload file logo baru, hapus gambar lama dari folder uploads
    if (data.gambarslide && slide.gambarslide) {
      const oldFilePath = join(__dirname, '..', '..', 'uploads','slide', slide.gambarslide);
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
    const slide = await this.repo.findOneBy({ id });
    if (!slide) throw new BadRequestException('Slide not found');

    // Hapus file logo dari filesystem jika ada
    if (slide.gambarslide) {
      const filepath = join(__dirname, '..', '..', 'uploads','slide', slide.gambarslide);
      try {
        await unlink(filepath);
      } catch (err) {
        console.error('Gagal hapus file logo:', err.message);
      }
    }

    return this.repo.delete(id);
  }
}
