import { Repository } from 'typeorm';
import { Berita } from './pengumuman.entity';
export declare class BeritaService {
    private repo;
    constructor(repo: Repository<Berita>);
    create(data: Partial<Berita>): Promise<Partial<Berita> & Berita>;
    findAll(): Promise<Berita[]>;
    findOne(id: number): Promise<Berita | null>;
    update(id: number, data: Partial<Berita>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
