import { RadiologiService } from './radiologi.service';
export declare class RadiologiController {
    private readonly service;
    constructor(service: RadiologiService);
    findAll(): Promise<import("./radiologi.entity").Radiologi[]>;
    findOne(id: string): Promise<import("./radiologi.entity").Radiologi | null>;
    create(data: any, file: any): Promise<Partial<import("./radiologi.entity").Radiologi> & import("./radiologi.entity").Radiologi>;
    update(id: string, data: any, file: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
