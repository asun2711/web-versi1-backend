import { Repository } from 'typeorm';
import { Laboratorium } from './radiologi.entity';
export declare class LaboratoriumService {
    private repo;
    constructor(repo: Repository<Laboratorium>);
    create(data: Partial<Laboratorium>): Promise<Partial<Laboratorium> & Laboratorium>;
    findAll(): Promise<Laboratorium[]>;
    findOne(id: number): Promise<Laboratorium | null>;
    update(id: number, data: Partial<Laboratorium>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
