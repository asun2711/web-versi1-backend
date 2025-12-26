import { Repository } from 'typeorm';
import { Contact } from './contact.entity';
export declare class ContactService {
    private repo;
    constructor(repo: Repository<Contact>);
    create(data: Partial<Contact>): Promise<Partial<Contact> & Contact>;
    findAll(): Promise<Contact[]>;
    findOne(id: number): Promise<Contact | null>;
    update(id: number, data: Partial<Contact>): Promise<Contact | null>;
    remove(id: number): Promise<void>;
}
