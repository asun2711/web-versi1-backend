import { Repository } from 'typeorm';
import { Igd } from './igd.entity';
export declare class IgdService {
    private repo;
    constructor(repo: Repository<Igd>);
    create(data: Partial<Igd>): Promise<Partial<Igd> & Igd>;
    findAll(): Promise<Igd[]>;
    findOne(id: number): Promise<Igd | null>;
    update(id: number, data: Partial<Igd>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
