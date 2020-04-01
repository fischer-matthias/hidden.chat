/*
  LoginPage - Login or registration-page
*/
import { Component } from '@angular/core';
import { LoginService } from './../../services/login.service';
import { RegistrationService } from './../../services/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  passphrase = '';

  constructor(protected loginService: LoginService,
    protected registrationService: RegistrationService) { }

  onSignIn() {
    if (this.passphrase) {

    }
  }

  onRegistration() {
    if (this.passphrase) {
      this.registrationService.register(this.passphrase);
    }
  }

}
