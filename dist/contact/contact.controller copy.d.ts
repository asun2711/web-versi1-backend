import { ContactService } from './contact.service';
export declare class ContactController {
    private readonly service;
    constructor(service: ContactService);
    create(data: any): Promise<Partial<import("./contact.entity").Contact> & import("./contact.entity").Contact>;
}
