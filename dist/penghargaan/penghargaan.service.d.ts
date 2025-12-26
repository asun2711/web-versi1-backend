import { Repository } from 'typeorm';
import { Penghargaan } from './penghargaan.entity';
export declare class PenghargaanService {
    private repo;
    constructor(repo: Repository<Penghargaan>);
    create(data: Partial<Penghargaan>): Promise<Partial<Penghargaan> & Penghargaan>;
    findAll(): Promise<Penghargaan[]>;
    findOne(id: number): Promise<Penghargaan | null>;
    update(id: number, data: Partial<Penghargaan>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
