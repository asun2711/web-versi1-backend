import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Spesialis } from './spesialis.entity';
import { unlink } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class SpesialisService {
  constructor(@InjectRepository(Spesialis) private repo: Repository<Spesialis>) {}

  create(data: Partial<Spesialis>) {
    return this.repo.save(data);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, data: Partial<Spesialis>) {
    const spesialis = await this.repo.findOneBy({ id });
    if (!spesialis) {
      throw new BadRequestException('Spesialis not found');
    }

    // Jika ada upload file logo baru, hapus gambar lama dari folder uploads
    if (data.gambarspesialis && spesialis.gambarspesialis) {
      const oldFilePath = join(__dirname, '..', '..', 'uploads','spesialis', spesialis.gambarspesialis);
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
    const spesialis = await this.repo.findOneBy({ id });
    if (!spesialis) throw new BadRequestException('Spesialis not found');

    // Hapus file logo dari filesystem jika ada
    if (spesialis.gambarspesialis) {
      const filepath = join(__dirname, '..', '..', 'uploads','spesialis', spesialis.gambarspesialis);
      try {
        await unlink(filepath);
      } catch (err) {
        console.error('Gagal hapus file logo:', err.message);
      }
    }

    return this.repo.delete(id);
  }
}
