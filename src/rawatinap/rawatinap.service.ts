import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RawatInap } from './rawatinap.entity';
import { unlink } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class RawatInapService {
  constructor(@InjectRepository(RawatInap) private repo: Repository<RawatInap>) {}

  create(data: Partial<RawatInap>) {
    return this.repo.save(data);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, data: Partial<RawatInap>) {
    const rawatinap = await this.repo.findOneBy({ id });
    if (!rawatinap) {
      throw new BadRequestException('RawatInap not found');
    }

    // Jika ada upload file logo baru, hapus gambar lama dari folder uploads
    if (data.gambarrawatinap && rawatinap.gambarrawatinap) {
      const oldFilePath = join(__dirname, '..', '..', 'uploads','rawatinap', rawatinap.gambarrawatinap);
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
    const rawatinap = await this.repo.findOneBy({ id });
    if (!rawatinap) throw new BadRequestException('RawatInap not found');

    // Hapus file logo dari filesystem jika ada
    if (rawatinap.gambarrawatinap) {
      const filepath = join(__dirname, '..', '..', 'uploads','rawatinap', rawatinap.gambarrawatinap);
      try {
        await unlink(filepath);
      } catch (err) {
        console.error('Gagal hapus file logo:', err.message);
      }
    }

    return this.repo.delete(id);
  }
}
