import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RawatJalan } from './rawatjalan.entity';
import { unlink } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class RawatJalanService {
  constructor(@InjectRepository(RawatJalan) private repo: Repository<RawatJalan>) {}

  create(data: Partial<RawatJalan>) {
    return this.repo.save(data);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, data: Partial<RawatJalan>) {
    const rawatjalan = await this.repo.findOneBy({ id });
    if (!rawatjalan) {
      throw new BadRequestException('RawatJalan not found');
    }

    // Jika ada upload file logo baru, hapus gambar lama dari folder uploads
    if (data.gambarrawatjalan && rawatjalan.gambarrawatjalan) {
      const oldFilePath = join(__dirname, '..', '..', 'uploads','rawatjalan', rawatjalan.gambarrawatjalan);
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
    const rawatjalan = await this.repo.findOneBy({ id });
    if (!rawatjalan) throw new BadRequestException('RawatJalan not found');

    // Hapus file logo dari filesystem jika ada
    if (rawatjalan.gambarrawatjalan) {
      const filepath = join(__dirname, '..', '..', 'uploads','rawatjalan', rawatjalan.gambarrawatjalan);
      try {
        await unlink(filepath);
      } catch (err) {
        console.error('Gagal hapus file logo:', err.message);
      }
    }

    return this.repo.delete(id);
  }
}
