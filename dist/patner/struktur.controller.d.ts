import { PatnerService } from './patner.service';
export declare class PatnerController {
    private readonly service;
    constructor(service: PatnerService);
    findAll(): any;
    findOne(id: string): any;
    create(data: any, file: any): Promise<any>;
    update(id: string, data: any, file: any): Promise<any>;
    remove(id: string): Promise<any>;
}
