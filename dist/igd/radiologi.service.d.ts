import { Repository } from 'typeorm';
import { Radiologi } from './igd.entity';
export declare class RadiologiService {
    private repo;
    constructor(repo: Repository<Radiologi>);
    create(data: Partial<Radiologi>): Promise<Partial<Radiologi> & Radiologi>;
    findAll(): Promise<Radiologi[]>;
    findOne(id: number): Promise<Radiologi | null>;
    update(id: number, data: Partial<Radiologi>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
