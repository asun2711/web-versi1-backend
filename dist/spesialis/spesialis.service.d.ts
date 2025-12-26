import { Repository } from 'typeorm';
import { Spesialis } from './spesialis.entity';
export declare class SpesialisService {
    private repo;
    constructor(repo: Repository<Spesialis>);
    create(data: Partial<Spesialis>): Promise<Partial<Spesialis> & Spesialis>;
    findAll(): Promise<Spesialis[]>;
    findOne(id: number): Promise<Spesialis | null>;
    update(id: number, data: Partial<Spesialis>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
