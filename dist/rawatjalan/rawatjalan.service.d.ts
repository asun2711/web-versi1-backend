import { Repository } from 'typeorm';
import { RawatJalan } from './rawatjalan.entity';
export declare class RawatJalanService {
    private repo;
    constructor(repo: Repository<RawatJalan>);
    create(data: Partial<RawatJalan>): Promise<Partial<RawatJalan> & RawatJalan>;
    findAll(): Promise<RawatJalan[]>;
    findOne(id: number): Promise<RawatJalan | null>;
    update(id: number, data: Partial<RawatJalan>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
