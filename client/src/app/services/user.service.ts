import { Injectable } from '@angular/core';
import * as openpgp from 'openpgp';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;

  constructor() { }

  public generateKeyPair(name: string, passphrase: string) {
    openpgp.generateKey({
      userIds: [{ name: `${name}`, email: `${name}@hidden.chat` }],
      numBits: 4096,
      passphrase
    }).then((key) => {
      this.user.privateKey = key.privateKeyArmored;
      this.user.publicKey = key.publicKeyArmored;
    });
  }
}
