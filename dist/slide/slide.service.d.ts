import { Repository } from 'typeorm';
import { Slide } from './slide.entity';
export declare class SlideService {
    private repo;
    constructor(repo: Repository<Slide>);
    create(data: Partial<Slide>): Promise<Partial<Slide> & Slide>;
    findAll(): Promise<Slide[]>;
    findOne(id: number): Promise<Slide | null>;
    update(id: number, data: Partial<Slide>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
