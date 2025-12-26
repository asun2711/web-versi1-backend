import { BeritaService } from './berita.service';
export declare class BeritaController {
    private readonly service;
    constructor(service: BeritaService);
    findAll(): Promise<import("./berita.entity").Berita[]>;
    findOne(id: string): Promise<import("./berita.entity").Berita | null>;
    create(data: any, file: any): Promise<Partial<import("./berita.entity").Berita> & import("./berita.entity").Berita>;
    update(id: string, data: any, file: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
