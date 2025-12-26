import { Repository } from 'typeorm';
import { RawatInap } from './rawatinap.entity';
export declare class RawatInapService {
    private repo;
    constructor(repo: Repository<RawatInap>);
    create(data: Partial<RawatInap>): Promise<Partial<RawatInap> & RawatInap>;
    findAll(): Promise<RawatInap[]>;
    findOne(id: number): Promise<RawatInap | null>;
    update(id: number, data: Partial<RawatInap>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
