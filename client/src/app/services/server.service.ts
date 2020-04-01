/*
  ServerService - Communication with the backend
*/
import { Injectable } from '@angular/core';
import { Req } from './../models/request';
import { CryptService } from './crypt.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  publicKey = '';

  constructor(protected cryptService: CryptService,
    protected loginService: LoginService) {
    this.fetchPublicKey();
  }

  send(request: Req): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const encryptedMessage = await this.cryptService.encrypt(request, this.publicKey);
        const encryptedResponse = await this.post(encryptedMessage);
        const decryptedResponse = await this.cryptService.decrypt(encryptedResponse, this.loginService.user.passphrase);

        resolve(decryptedResponse);
      } catch (err) {
        reject(err);
      }
    });
  }

  setPublicKey(key: string) {
    this.publicKey = key;
  }

  protected fetchPublicKey() {
    // this.publicKey =
    // TODO
  }

  protected post(encryptedMessage: string): Promise<string> {
    return new Promise((resolve, reject) => {
      // TODO
      const encryptedResponse = '';
      resolve(encryptedMessage);
    });
  }
}
