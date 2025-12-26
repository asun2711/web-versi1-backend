import { Repository } from 'typeorm';
import { Dokter } from './dokter.entity';
export declare class DokterService {
    private repo;
    constructor(repo: Repository<Dokter>);
    create(data: Partial<Dokter>): Promise<Partial<Dokter> & Dokter>;
    findAll(): Promise<Dokter[]>;
    findOne(id: number): Promise<Dokter | null>;
    update(id: number, data: Partial<Dokter>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
