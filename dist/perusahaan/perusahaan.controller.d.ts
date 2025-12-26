import { PerusahaanService } from './perusahaan.service';
export declare class PerusahaanController {
    private readonly service;
    constructor(service: PerusahaanService);
    findAll(): Promise<import("./perusahaan.entity").Perusahaan[]>;
    findOne(id: string): Promise<import("./perusahaan.entity").Perusahaan | null>;
    create(data: any, file: any): Promise<Partial<import("./perusahaan.entity").Perusahaan> & import("./perusahaan.entity").Perusahaan>;
    update(id: string, data: any, file: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
