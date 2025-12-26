import { PengumumanService } from './pengumuman.service';
export declare class PengumumanController {
    private readonly service;
    constructor(service: PengumumanService);
    findAll(): Promise<import("./pengumuman.entity").Pengumuman[]>;
    findOne(id: string): Promise<import("./pengumuman.entity").Pengumuman | null>;
    create(data: any, file: any): Promise<Partial<import("./pengumuman.entity").Pengumuman> & import("./pengumuman.entity").Pengumuman>;
    update(id: string, data: any, file: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
