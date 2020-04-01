/*
  ChatPage - Displaying messages from and to the user
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from './../../models/contact';
import { ContactsService } from './../../services/contacts.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  contact: Contact;

  constructor(protected router: Router, protected activeRoute: ActivatedRoute, public contactsService: ContactsService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((parameters: any) => {
      this.contact = this.contactsService.get(parameters.id);
    });
  }

  onBack() {
    this.router.navigate(['/tabs/contacts']);
  }

}
