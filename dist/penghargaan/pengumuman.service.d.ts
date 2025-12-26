import { Repository } from 'typeorm';
import { Pengumuman } from './penghargaan.entity';
export declare class PengumumanService {
    private repo;
    constructor(repo: Repository<Pengumuman>);
    create(data: Partial<Pengumuman>): Promise<Partial<Pengumuman> & Pengumuman>;
    findAll(): Promise<Pengumuman[]>;
    findOne(id: number): Promise<Pengumuman | null>;
    update(id: number, data: Partial<Pengumuman>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
