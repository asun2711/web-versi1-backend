import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Laboratorium } from './laboratorium.entity';
import { unlink } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class LaboratoriumService {
  constructor(@InjectRepository(Laboratorium) private repo: Repository<Laboratorium>) {}

  create(data: Partial<Laboratorium>) {
    return this.repo.save(data);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, data: Partial<Laboratorium>) {
    const laboratorium = await this.repo.findOneBy({ id });
    if (!laboratorium) {
      throw new BadRequestException('Laboratorium not found');
    }

    // Jika ada upload file logo baru, hapus gambar lama dari folder uploads
    if (data.gambarlaboratorium && laboratorium.gambarlaboratorium) {
      const oldFilePath = join(__dirname, '..', '..', 'uploads','laboratorium', laboratorium.gambarlaboratorium);
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
    const laboratorium = await this.repo.findOneBy({ id });
    if (!laboratorium) throw new BadRequestException('Laboratorium not found');

    // Hapus file logo dari filesystem jika ada
    if (laboratorium.gambarlaboratorium) {
      const filepath = join(__dirname, '..', '..', 'uploads','laboratorium', laboratorium.gambarlaboratorium);
      try {
        await unlink(filepath);
      } catch (err) {
        console.error('Gagal hapus file logo:', err.message);
      }
    }

    return this.repo.delete(id);
  }
}
