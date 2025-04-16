import { Component } from '@angular/core';
import { ContactListComponent } from './contact-list/contact-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactListComponent],
  template: '<app-contact-list />'
})
export class AppComponent {}