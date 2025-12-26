import { RawatInapService } from './rawatinap.service';
export declare class RawatInapController {
    private readonly service;
    constructor(service: RawatInapService);
    findAll(): Promise<import("./rawatinap.entity").RawatInap[]>;
    findOne(id: string): Promise<import("./rawatinap.entity").RawatInap | null>;
    create(data: any, file: any): Promise<Partial<import("./rawatinap.entity").RawatInap> & import("./rawatinap.entity").RawatInap>;
    update(id: string, data: any, file: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
