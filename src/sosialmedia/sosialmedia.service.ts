import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SosialMedia } from './sosialmedia.entity';
import { unlink } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class SosialMediaService {
  constructor(@InjectRepository(SosialMedia) private repo: Repository<SosialMedia>) {}

  create(data: Partial<SosialMedia>) {
    return this.repo.save(data);
  }

  findAll() {
    return this.repo.find({ order: { id: 'ASC' } });
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, data: Partial<SosialMedia>) {
    const sosialmedia = await this.repo.findOneBy({ id });
    if (!sosialmedia) {
      throw new BadRequestException('SosialMedia not found');
    }

    if (data.iconsosialmedia && sosialmedia.iconsosialmedia) {
      const oldFilePath = join(__dirname, '..', '..', 'uploads','sosialmedia', sosialmedia.iconsosialmedia);
      try {
        await unlink(oldFilePath);
      } catch (err) {
        console.error('Gagal hapus file icon lama:', err.message);
      }
    }

    return this.repo.update(id, data);
  }

  async remove(id: number) {
    const sosialmedia = await this.repo.findOneBy({ id });
    if (!sosialmedia) throw new BadRequestException('SosialMedia not found');

    if (sosialmedia.iconsosialmedia) {
      const filepath = join(__dirname, '..', '..', 'uploads','sosialmedia', sosialmedia.iconsosialmedia);
      try {
        await unlink(filepath);
      } catch (err) {
        console.error('Gagal hapus file icon:', err.message);
      }
    }

    return this.repo.delete(id);
  }
}
