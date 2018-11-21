import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { Contact } from '../contact';
import { ContactService } from  '../contact.service';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: [ './contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  @Input() contact: Contact;

  contactForm = this.fb.group({
    title: [''],
    name: [''],
    phone: [''],
    address: ['']
  })
  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private location: Location,
    private fb: FormBuilder
    ) {}

   ngOnInit() {
     this.getContact();
   }

   getContact() {
     const id = +this.route.snapshot.paramMap.get('id');
     this.contactService.getContact(id)
       .subscribe( contact => {
         this.contact=contact;
         this.contactForm.patchValue(contact);
       });
   }

   goBack() {
     this.location.back();
   }

   update() {
    console.log(this.contactForm.value);
    let tempContact = {};
     tempContact = this.contactForm.value;
     tempContact.id = this.contact.id;
     this.contactService.updateContact(tempContact).subscribe(() => this.goBack());
   }
}
