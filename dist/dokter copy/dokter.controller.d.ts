import { DokterService } from './dokter.service';
export declare class DokterController {
    private readonly service;
    constructor(service: DokterService);
    findAll(): Promise<import("./dokter.entity").Dokter[]>;
    findOne(id: string): Promise<import("./dokter.entity").Dokter | null>;
    create(data: any, file: any): Promise<Partial<import("./dokter.entity").Dokter> & import("./dokter.entity").Dokter>;
    update(id: string, data: any, file: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
