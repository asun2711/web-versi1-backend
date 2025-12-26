import { LaboratoriumService } from './laboratorium.service';
export declare class LaboratoriumController {
    private readonly service;
    constructor(service: LaboratoriumService);
    findAll(): Promise<import("./laboratorium.entity").Laboratorium[]>;
    findOne(id: string): Promise<import("./laboratorium.entity").Laboratorium | null>;
    create(data: any, file: any): Promise<Partial<import("./laboratorium.entity").Laboratorium> & import("./laboratorium.entity").Laboratorium>;
    update(id: string, data: any, file: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
