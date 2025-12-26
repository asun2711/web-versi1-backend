import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KontenSosial } from './kontensosial.entity';

@Injectable()
export class KontenSosialService {
  constructor(@InjectRepository(KontenSosial) private repo: Repository<KontenSosial>) {}

  create(data: Partial<KontenSosial>) {
    return this.repo.save(data);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, data: Partial<KontenSosial>) {
    const konten = await this.repo.findOneBy({ id });
    if (!konten) throw new BadRequestException('KontenSosial tidak ditemukan');
    await this.repo.update(id, data);
    return this.repo.findOneBy({ id });
  }

  async remove(id: number) {
    const konten = await this.repo.findOneBy({ id });
    if (!konten) throw new BadRequestException('KontenSosial tidak ditemukan');
    return this.repo.delete(id);
  }
}
