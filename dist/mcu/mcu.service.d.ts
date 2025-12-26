import { Repository } from 'typeorm';
import { Mcu } from './mcu.entity';
export declare class McuService {
    private repo;
    constructor(repo: Repository<Mcu>);
    create(data: Partial<Mcu>): Promise<Partial<Mcu> & Mcu>;
    findAll(): Promise<Mcu[]>;
    findOne(id: number): Promise<Mcu | null>;
    update(id: number, data: Partial<Mcu>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
