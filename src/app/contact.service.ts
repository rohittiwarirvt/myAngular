import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Contact } from './contact';

const httpOptions = {
  headers: new HttpHeaders({ 'ContentType': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ContactService {

  private contactsUrl = 'api/contacts';

  constructor( private http: HttpClient) {

  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact []> (this.contactsUrl)
      .pipe(
        tap(contacts => this.log(`fetched some contacts`)),
        catchError(this.handleError('getContacts', []))
        );
  }

  getContactNo404(): void {

  }

  getContact(): void {

  }

  addContact(): void {

  }

  deleteContact(contact: Contact | number): Observable<Contact> {
    const id = typeof contact === 'number' ? contact: contact.id;
    const url = `${this.contactsUrl}/${id}`;

    return this.http.delete<Contact>(url, httpOptions)
      .pipe(
        tap( _ => this.log(`deleted the Contact: id = ${id}`)),
        catchError(this.handleError<Contact>('deleteHero'))
        );
  }

  updateContact() : void {

  }

  private handleError<T> ( operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      this.log(error);

      return of(result as T);
    };
  }

  private log( message: string) {
    console.log(`ContactService :  ${message}`);
  }
}
