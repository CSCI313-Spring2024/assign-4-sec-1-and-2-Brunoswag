import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../services/contact.service';
import { Contact } from '../contact/contact.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  selectedContact: Contact | null = null;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void { this.contactService.contacts$.subscribe(data => this.contacts = data); }

  edit(contact: Contact) { this.selectedContact = { ...contact }; }

  delete(id: number) 
  {
    this.contactService.deleteContact(id);
    this.selectedContact = null;
  }

  save(contact: Contact) 
  {
    if (contact.id) { this.contactService.updateContact(contact); } 
    else            { this.contactService.addContact(contact); }
    this.selectedContact = null;
  }

  cancel() { this.selectedContact = null; }
}
