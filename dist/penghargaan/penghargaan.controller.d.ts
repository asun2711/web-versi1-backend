import { PenghargaanService } from './penghargaan.service';
export declare class PenghargaanController {
    private readonly service;
    constructor(service: PenghargaanService);
    findAll(): Promise<import("./penghargaan.entity").Penghargaan[]>;
    findOne(id: string): Promise<import("./penghargaan.entity").Penghargaan | null>;
    create(data: any, file: any): Promise<Partial<import("./penghargaan.entity").Penghargaan> & import("./penghargaan.entity").Penghargaan>;
    update(id: string, data: any, file: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
