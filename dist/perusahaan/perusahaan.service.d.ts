import { Repository } from 'typeorm';
import { Perusahaan } from './perusahaan.entity';
export declare class PerusahaanService {
    private repo;
    constructor(repo: Repository<Perusahaan>);
    create(data: Partial<Perusahaan>): Promise<Partial<Perusahaan> & Perusahaan>;
    findAll(): Promise<Perusahaan[]>;
    findOne(id: number): Promise<Perusahaan | null>;
    update(id: number, data: Partial<Perusahaan>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
