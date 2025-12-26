import { McuService } from './mcu.service';
export declare class McuController {
    private readonly service;
    constructor(service: McuService);
    findAll(): Promise<import("./mcu.entity").Mcu[]>;
    findOne(id: string): Promise<import("./mcu.entity").Mcu | null>;
    create(data: any, file: any): Promise<Partial<import("./mcu.entity").Mcu> & import("./mcu.entity").Mcu>;
    update(id: string, data: any, file: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
