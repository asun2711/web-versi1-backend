import { IgdService } from './igd.service';
export declare class IgdController {
    private readonly service;
    constructor(service: IgdService);
    findAll(): Promise<import("./igd.entity").Igd[]>;
    findOne(id: string): Promise<import("./igd.entity").Igd | null>;
    create(data: any, file: any): Promise<Partial<import("./igd.entity").Igd> & import("./igd.entity").Igd>;
    update(id: string, data: any, file: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
