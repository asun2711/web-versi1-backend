import { StrukturService } from './struktur.service';
export declare class StrukturController {
    private readonly service;
    constructor(service: StrukturService);
    findAll(): Promise<import("./struktur.entity").Struktur[]>;
    findOne(id: string): Promise<import("./struktur.entity").Struktur | null>;
    create(data: any, file: any): Promise<Partial<import("./struktur.entity").Struktur> & import("./struktur.entity").Struktur>;
    update(id: string, data: any, file: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
