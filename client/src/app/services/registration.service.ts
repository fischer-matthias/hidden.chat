/*
  RegistrationService - Register a new user
*/

import { Injectable } from '@angular/core';
import { RequestType } from '../enums/request-type';
import { RegistrationReq } from './../models/registration-request';
import { RegistrationRes } from './../models/registration-response';
import { CryptService } from './crypt.service';
import { LogService } from './log.service';
import { LoginService } from './login.service';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(protected logService: LogService,
    protected cryptService: CryptService,
    protected serverService: ServerService,
    protected loginService: LoginService) { }

  register(passphrase: string) {
    this.doRegistration(passphrase)
      .then(() => {
        this.logService.debug('RegistrationService.register() complete!');
      })
      .catch((error) => {
        this.logService.error(error);
      });
  }

  protected doRegistration(passphrase: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      this.logService.debug('RegistrationService.prepareRegistration(): Trigger PGP-Key-Generation');
      this.loginService.user.passphrase = passphrase;

      try {
        await this.cryptService.generatePGPKey(passphrase);
        await this.sendRegistrationRequest();
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }

  protected sendRegistrationRequest(): Promise<void> {
    return new Promise(async (resolve, reject) => {
      this.logService.debug('RegistrationService.sendRegistrationRequest(): Send new registration-request');

      const registrationReq: RegistrationReq = {
        type: RequestType.REGISTRATION,
        publicKey: this.cryptService.publicKey
      };

      try {
        const registrationResponse: RegistrationRes = await this.serverService.send(registrationReq);

        if (this.cryptService.publicKey === registrationResponse.publicKey) {
          if (registrationResponse.userId) {
            this.loginService.user.id = registrationResponse.userId;
            resolve();
          } else {
            reject('RegistrationService.sendRegistrationRequest(): No userid available!');
          }
        } else {
          reject('RegistrationService.sendRegistrationRequest(): User-Public-Key invalid!');
        }
      } catch (err) {
        reject(err);
      }
    });
  }
}
