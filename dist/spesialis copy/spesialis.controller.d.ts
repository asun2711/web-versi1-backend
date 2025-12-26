import { SpesialisService } from './spesialis.service';
export declare class SpesialisController {
    private readonly service;
    constructor(service: SpesialisService);
    findAll(): Promise<import("./spesialis.entity").Spesialis[]>;
    findOne(id: string): Promise<import("./spesialis.entity").Spesialis | null>;
    create(data: any, file: any): Promise<Partial<import("./spesialis.entity").Spesialis> & import("./spesialis.entity").Spesialis>;
    update(id: string, data: any, file: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
