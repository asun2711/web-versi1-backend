import { SlideService } from './slide.service';
export declare class SlideController {
    private readonly service;
    constructor(service: SlideService);
    findAll(): Promise<import("./slide.entity").Slide[]>;
    findOne(id: string): Promise<import("./slide.entity").Slide | null>;
    create(data: any, file: any): Promise<Partial<import("./slide.entity").Slide> & import("./slide.entity").Slide>;
    update(id: string, data: any, file: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
