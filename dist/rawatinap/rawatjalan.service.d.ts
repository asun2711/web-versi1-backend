import { Repository } from 'typeorm';
import { RawatJalan } from './rawatjalan.entity';
export declare class RawatJalanService {
    private repo;
    constructor(repo: Repository<RawatJalan>);
    create(data: Partial<RawatJalan>): Promise<any>;
    findAll(): Promise<RawatJalan[]>;
    findOne(id: number): Promise<any>;
    update(id: number, data: Partial<RawatJalan>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
