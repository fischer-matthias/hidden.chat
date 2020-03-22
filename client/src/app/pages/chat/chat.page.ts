import { Contact } from './../../models/contact';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  contact: Contact;

  constructor(protected router: Router) { }

  ngOnInit() {
  }

  onBack() {
    this.router.navigate(['/tabs/contacts']);
  }

}
