import { Repository } from 'typeorm';
import { KontenSosialMedia } from './kontensosial.entity';
export declare class KontenSosialMediaService {
    private repo;
    constructor(repo: Repository<KontenSosialMedia>);
    create(data: Partial<KontenSosialMedia>): Promise<KontenSosialMedia>;
    findAll(): Promise<KontenSosialMedia[]>;
    findOne(id: number): Promise<KontenSosialMedia | null>;
    update(id: number, data: Partial<KontenSosialMedia>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
