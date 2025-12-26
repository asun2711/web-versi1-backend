import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Penghargaan } from './penghargaan.entity';
import { unlink } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class PenghargaanService {
  constructor(@InjectRepository(Penghargaan) private repo: Repository<Penghargaan>) {}

  create(data: Partial<Penghargaan>) {
    return this.repo.save(data);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, data: Partial<Penghargaan>) {
    const penghargaan = await this.repo.findOneBy({ id });
    if (!penghargaan) {
      throw new BadRequestException('Penghargaan not found');
    }

    // Jika ada upload file logo baru, hapus gambar lama dari folder uploads
    if (data.gambarpenghargaan && penghargaan.gambarpenghargaan) {
      const oldFilePath = join(__dirname, '..', '..', 'uploads','penghargaan', penghargaan.gambarpenghargaan);
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
    const penghargaan = await this.repo.findOneBy({ id });
    if (!penghargaan) throw new BadRequestException('Penghargaan not found');

    // Hapus file logo dari filesystem jika ada
    if (penghargaan.gambarpenghargaan) {
      const filepath = join(__dirname, '..', '..', 'uploads','penghargaan', penghargaan.gambarpenghargaan);
      try {
        await unlink(filepath);
      } catch (err) {
        console.error('Gagal hapus file logo:', err.message);
      }
    }

    return this.repo.delete(id);
  }
}
