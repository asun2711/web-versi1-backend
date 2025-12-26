import { Repository } from 'typeorm';
import { Patner } from './patner.entity';
export declare class PatnerService {
    private repo;
    constructor(repo: Repository<Patner>);
    create(data: Partial<Patner>): Promise<Partial<Patner> & Patner>;
    findAll(): Promise<Patner[]>;
    findOne(id: number): Promise<Patner | null>;
    update(id: number, data: Partial<Patner>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
