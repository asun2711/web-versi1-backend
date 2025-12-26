import { ContactService } from './contact.service';
import { Contact } from './contact.entity';
export declare class ContactController {
    private readonly service;
    constructor(service: ContactService);
    create(data: Partial<Contact>): Promise<Partial<Contact> & Contact>;
    findAll(): Promise<Contact[]>;
    findOne(id: number): Promise<Contact>;
    update(id: number, data: Partial<Contact>): Promise<Contact | null>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
