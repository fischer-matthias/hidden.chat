import { ContactsService } from './../../services/contacts.service';
import { Contact } from './../../models/contact';
import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

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
