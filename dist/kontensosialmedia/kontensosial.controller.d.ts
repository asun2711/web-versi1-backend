import { KontenSosialService } from './kontensosial.service';
export declare class KontenSosialController {
    private readonly service;
    constructor(service: KontenSosialService);
    findAll(): Promise<import("./kontensosial.entity").KontenSosial[]>;
    findOne(id: string): Promise<import("./kontensosial.entity").KontenSosial | null>;
    create(data: any): Promise<Partial<import("./kontensosial.entity").KontenSosial> & import("./kontensosial.entity").KontenSosial>;
    update(id: string, data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
