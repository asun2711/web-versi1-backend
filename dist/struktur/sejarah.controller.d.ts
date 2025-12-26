import { SejarahService } from './sejarah.service';
export declare class SejarahController {
    private readonly service;
    constructor(service: SejarahService);
    findAll(): Promise<import("./sejarah.entity").Sejarah[]>;
    findOne(id: string): Promise<import("./sejarah.entity").Sejarah | null>;
    create(data: any, file: any): Promise<Partial<import("./sejarah.entity").Sejarah> & import("./sejarah.entity").Sejarah>;
    update(id: string, data: any, file: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
