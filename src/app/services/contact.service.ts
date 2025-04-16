import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from '../contact/contact.component';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private contacts: Contact[] = [];
  private contactsSubject = new BehaviorSubject<Contact[]>([]);
  contacts$ = this.contactsSubject.asObservable();

  constructor() 
  {
    this.contacts = 
    [
      { id: 1, firstName: 'John', lastName: 'Doe', phone: '123-456-7890', email: 'john@example.com' },
      { id: 2, firstName: 'Jane', lastName: 'Smith', phone: '987-654-3210', email: 'jane@example.com' }
    ];
    this.contactsSubject.next(this.contacts);
  }

  addContact(contact: Contact) 
  {
    contact.id = Date.now();
    this.contacts.push(contact);
    this.contactsSubject.next(this.contacts);
  }

  updateContact(updatedContact: Contact)
  {
    const index = this.contacts.findIndex(c => c.id === updatedContact.id);
    if (index > -1) 
    {
      this.contacts[index] = updatedContact;
      this.contactsSubject.next(this.contacts);
    }
  }

  deleteContact(id: number) 
  {
    this.contacts = this.contacts.filter(c => c.id !== id);
    this.contactsSubject.next(this.contacts);
  }
}