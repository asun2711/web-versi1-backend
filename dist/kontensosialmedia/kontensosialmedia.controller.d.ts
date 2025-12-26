import { KontenSosialMediaService } from './kontensosial.service';
export declare class KontenSosialMediaController {
    private readonly service;
    constructor(service: KontenSosialMediaService);
    findAll(): any;
    findOne(id: string): any;
    create(data: any): Promise<any>;
    update(id: string, data: any): Promise<any>;
    remove(id: string): Promise<any>;
}
