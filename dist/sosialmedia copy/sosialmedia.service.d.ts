import { Repository } from 'typeorm';
import { SosialMedia } from './sosialmedia.entity';
export declare class SosialMediaService {
    private repo;
    constructor(repo: Repository<SosialMedia>);
    create(data: Partial<SosialMedia>): Promise<Partial<SosialMedia> & SosialMedia>;
    findAll(): Promise<SosialMedia[]>;
    findOne(id: number): Promise<SosialMedia | null>;
    update(id: number, data: Partial<SosialMedia>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
