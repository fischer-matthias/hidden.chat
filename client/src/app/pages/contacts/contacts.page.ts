import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  contacts: Contact[] = [
    { id: 1, displayName: 'Test1', publicKey: '123' },
    { id: 2, displayName: 'Test2', publicKey: '123' },
    { id: 3, displayName: 'Test3', publicKey: '123' },
    { id: 4, displayName: 'Test4', publicKey: '123' },
    { id: 5, displayName: 'Test5', publicKey: '123' },
    { id: 6, displayName: 'Test6', publicKey: '123' },
  ];

  constructor(protected router: Router) { }

  ngOnInit() {
  }

  openChat(contact: Contact) {
    this.router.navigate(['/tabs/chat', contact.id]);
  }

}
