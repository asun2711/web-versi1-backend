import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Radiologi } from './radiologi.entity';
import { unlink } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class RadiologiService {
  constructor(@InjectRepository(Radiologi) private repo: Repository<Radiologi>) {}

  create(data: Partial<Radiologi>) {
    return this.repo.save(data);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, data: Partial<Radiologi>) {
    const radiologi = await this.repo.findOneBy({ id });
    if (!radiologi) {
      throw new BadRequestException('Radiologi not found');
    }

    // Jika ada upload file logo baru, hapus gambar lama dari folder uploads
    if (data.gambarradiologi && radiologi.gambarradiologi) {
      const oldFilePath = join(__dirname, '..', '..', 'uploads','radiologi', radiologi.gambarradiologi);
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
    const radiologi = await this.repo.findOneBy({ id });
    if (!radiologi) throw new BadRequestException('Radiologi not found');

    // Hapus file logo dari filesystem jika ada
    if (radiologi.gambarradiologi) {
      const filepath = join(__dirname, '..', '..', 'uploads','radiologi', radiologi.gambarradiologi);
      try {
        await unlink(filepath);
      } catch (err) {
        console.error('Gagal hapus file logo:', err.message);
      }
    }

    return this.repo.delete(id);
  }
}
