import { Component, OnInit } from '@angular/core';

import { Contact } from '../contact';
import { ContactService }  from '../contact.service';


@Component({
 selector: 'app-home',
 templateUrl: './home.component.html',
 styleUrls: [ './home.component.css']
})

export class AppHomeComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService) {

  }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getContacts()
      .subscribe( contacts => this.contacts = contacts.slice(0,5));
  }

}
