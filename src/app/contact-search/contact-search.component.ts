import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.css']
})

export class ContactSearchComponent implements OnInit {

  contacts$: Observable<Contact[]>;
  private searchTerms = new Subject<string>();

  constructor(private contactService: ContactService) {

  }

  ngOnInit() {
    this.contacts$ = this.searchTerms.pipe(
      // time to wait before starting pinging
      debounceTime(300),
      // ingnoring new terms if those are same as previous
      distinctUntilChanged(),

      // use new search Observalbe if for pingin the new searchTerms
      switchMap((term: string) => this.contactService.searchContacts(term)),
      )
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }


}
