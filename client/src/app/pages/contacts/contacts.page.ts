import { ContactsService } from './../../services/contacts.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  constructor(protected router: Router, public contactsService: ContactsService) { }

  ngOnInit() {
  }

  openChat(contact: Contact) {
    this.router.navigate(['/tabs/chat', contact.id]);
  }

}
