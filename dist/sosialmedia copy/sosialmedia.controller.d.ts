import { SosialMediaService } from './sosialmedia.service';
export declare class SosialMediaController {
    private readonly service;
    constructor(service: SosialMediaService);
    findAll(): Promise<import("./sosialmedia.entity").SosialMedia[]>;
    findOne(id: string): Promise<import("./sosialmedia.entity").SosialMedia | null>;
    create(data: any, file: any): Promise<Partial<import("./sosialmedia.entity").SosialMedia> & import("./sosialmedia.entity").SosialMedia>;
    update(id: string, data: any, file: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
