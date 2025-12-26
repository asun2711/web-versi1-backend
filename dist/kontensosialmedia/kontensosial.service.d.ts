import { Repository } from 'typeorm';
import { KontenSosial } from './kontensosial.entity';
export declare class KontenSosialService {
    private repo;
    constructor(repo: Repository<KontenSosial>);
    create(data: Partial<KontenSosial>): Promise<Partial<KontenSosial> & KontenSosial>;
    findAll(): Promise<KontenSosial[]>;
    findOne(id: number): Promise<KontenSosial | null>;
    update(id: number, data: Partial<KontenSosial>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
