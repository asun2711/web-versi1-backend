import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patner } from './patner.entity';
import { unlink } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class PatnerService {
  constructor(@InjectRepository(Patner) private repo: Repository<Patner>) {}

  create(data: Partial<Patner>) {
    return this.repo.save(data);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, data: Partial<Patner>) {
    const patner = await this.repo.findOneBy({ id });
    if (!patner) {
      throw new BadRequestException('Patner not found');
    }

    if (data.gambarpatner && patner.gambarpatner) {
      const oldFilePath = join(__dirname, '..', '..', 'uploads','patner', patner.gambarpatner);
      try {
        await unlink(oldFilePath);
      } catch (err) {
        console.error('Gagal hapus file logo lama:', err.message);
      }
    }

    return this.repo.update(id, data);
  }

  async remove(id: number) {
    const patner = await this.repo.findOneBy({ id });
    if (!patner) throw new BadRequestException('Patner not found');

    // Hapus file logo dari filesystem jika ada
    if (patner.gambarpatner) {
      const filepath = join(__dirname, '..', '..', 'uploads','patner', patner.gambarpatner);
      try {
        await unlink(filepath);
      } catch (err) {
        console.error('Gagal hapus file logo:', err.message);
      }
    }

    return this.repo.delete(id);
  }
}
