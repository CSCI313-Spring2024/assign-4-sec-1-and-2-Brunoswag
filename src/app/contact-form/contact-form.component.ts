import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Contact } from '../contact/contact.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  @Input() contact!: Contact;
  @Output() saveContact = new EventEmitter<Contact>();
  @Output() cancelEdit = new EventEmitter<void>();

  save() {
    this.saveContact.emit(this.contact);
  }

  cancel() {
    this.cancelEdit.emit();
  }
}
