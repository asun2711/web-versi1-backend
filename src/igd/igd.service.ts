import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Igd } from './igd.entity';
import { unlink } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class IgdService {
  constructor(@InjectRepository(Igd) private repo: Repository<Igd>) {}

  create(data: Partial<Igd>) {
    return this.repo.save(data);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, data: Partial<Igd>) {
    const igd = await this.repo.findOneBy({ id });
    if (!igd) {
      throw new BadRequestException('Igd not found');
    }

    // Jika ada upload file logo baru, hapus gambar lama dari folder uploads
    if (data.gambarigd && igd.gambarigd) {
      const oldFilePath = join(__dirname, '..', '..', 'uploads','igd', igd.gambarigd);
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
    const igd = await this.repo.findOneBy({ id });
    if (!igd) throw new BadRequestException('Igd not found');

    // Hapus file logo dari filesystem jika ada
    if (igd.gambarigd) {
      const filepath = join(__dirname, '..', '..', 'uploads','igd', igd.gambarigd);
      try {
        await unlink(filepath);
      } catch (err) {
        console.error('Gagal hapus file logo:', err.message);
      }
    }

    return this.repo.delete(id);
  }
}
