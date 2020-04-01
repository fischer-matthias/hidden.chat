/*
  ContactsService - Data-Service for the frondend (get, insert, delete contacts)
*/

import { Injectable } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: Contact[] = [
    { id: '1', displayName: 'Test1', publicKey: '123' },
    { id: '2', displayName: 'Test2', publicKey: '123' },
    { id: '3', displayName: 'Test3', publicKey: '123' },
    { id: '4', displayName: 'Test4', publicKey: '123' },
    { id: '5', displayName: 'Test5', publicKey: '123' },
    { id: '6', displayName: 'Test6', publicKey: '123' },
  ];

  constructor() { }

  add(id: string) {

  }

  get(id: string) {
    return this.contacts.find((value: Contact) => value.id === id);
  }
}
