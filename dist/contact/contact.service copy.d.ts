import { Repository } from 'typeorm';
import { Contact } from './contact.entity';
export declare class ContactService {
    private repo;
    constructor(repo: Repository<Contact>);
    create(data: Partial<Contact>): Promise<Partial<Contact> & Contact>;
}
