import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService:  ContactService) {

  }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

  delete(contact: Contact) {
    this.contacts = this.contacts.filter( c => c !== contact);
    this.contactService.deleteContact(contact).subscribe();
  }
}
