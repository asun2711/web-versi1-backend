import { PatnerService } from './patner.service';
export declare class PatnerController {
    private readonly service;
    constructor(service: PatnerService);
    findAll(): Promise<import("./patner.entity").Patner[]>;
    findOne(id: string): Promise<import("./patner.entity").Patner | null>;
    create(data: any, file: any): Promise<Partial<import("./patner.entity").Patner> & import("./patner.entity").Patner>;
    update(id: string, data: any, file: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
