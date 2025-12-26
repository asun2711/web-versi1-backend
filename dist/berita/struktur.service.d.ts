import { Repository } from 'typeorm';
import { Struktur } from './berita.entity';
export declare class StrukturService {
    private repo;
    constructor(repo: Repository<Struktur>);
    create(data: Partial<Struktur>): Promise<Partial<Struktur> & Struktur>;
    findAll(): Promise<Struktur[]>;
    findOne(id: number): Promise<Struktur | null>;
    update(id: number, data: Partial<Struktur>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
