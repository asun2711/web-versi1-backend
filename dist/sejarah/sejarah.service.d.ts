import { Repository } from 'typeorm';
import { Sejarah } from './sejarah.entity';
export declare class SejarahService {
    private repo;
    constructor(repo: Repository<Sejarah>);
    create(data: Partial<Sejarah>): Promise<Partial<Sejarah> & Sejarah>;
    findAll(): Promise<Sejarah[]>;
    findOne(id: number): Promise<Sejarah | null>;
    update(id: number, data: Partial<Sejarah>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
