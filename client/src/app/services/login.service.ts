/*
  LoginService - Login-handling
*/

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: User = {
    id: '',
    passphrase: '',
    loginToken: ''
  };

  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(protected logService: LogService) { }

  signIn() {
    this.isLoggedIn.next(true);
    this.logService.debug('LoginService: Succesfully signed in');
  }

  signOut() {
    this.isLoggedIn.next(false);
    this.logService.debug('LoginService: Succesfully signed out');
  }

  protected sendTokenRequest(): Promise<string> {
    return new Promise((resolve, reject) => {
      // todo
    });
  }
}
