import { RawatJalanService } from './rawatjalan.service';
export declare class RawatJalanController {
    private readonly service;
    constructor(service: RawatJalanService);
    findAll(): Promise<import("./rawatjalan.entity").RawatJalan[]>;
    findOne(id: string): Promise<import("./rawatjalan.entity").RawatJalan | null>;
    create(data: any, file: any): Promise<Partial<import("./rawatjalan.entity").RawatJalan> & import("./rawatjalan.entity").RawatJalan>;
    update(id: string, data: any, file: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
