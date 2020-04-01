/*
  CryptService - Encrypt/Decrypt data (also creates pgp key pair)
*/

import { Injectable } from '@angular/core';
import * as openpgp from 'openpgp';
import { LocaldataService } from './localdata.service';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class CryptService {

  publicKey: string;
  privateKey: string;

  constructor(protected logService: LogService, protected localdataService: LocaldataService) { }

  encrypt(object: any, publicKey: string): Promise<string> {
    return new Promise(async (resolve, reject) => {
      const message = this.toString(object);

      try {
        console.log(publicKey);
        const { data: encrypted } = await openpgp.encrypt({
          message: openpgp.message.fromText(message),
          publicKeys: (await openpgp.key.readArmored(publicKey)).keys,
        });

        if (encrypted) {
          this.logService.debug('CryptService.encrypt(): Succesfully encrypted a message!');
          resolve(encrypted);
        } else {
          reject('CryptService.encrypt(): Couldn"t encrypted a message!');
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  decrypt(encryptedMessage: string, passphrase: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {

        const { keys: [privateKey] } = await openpgp.key.readArmored(this.privateKey);
        const success = await privateKey.decrypt(passphrase);

        if (!success) {
          reject('CryptService.decrypt(): Couldn"t decrypt private key!');
        } else {

          const { data: decrypted } = await openpgp.decrypt({
            message: await openpgp.message.readArmored(encryptedMessage),
            privateKeys: [privateKey]
          });

          if (decrypted) {
            this.logService.debug('CryptService.decrypt(): Succesfully decrypted a message!');

            if (this.isParseAble(decrypted.toString())) {
              resolve(this.toObject(decrypted.toString()));
            } else {
              reject('CryptService.decrypt(): Decrypted message is not a valid json!');
            }

          } else {
            reject('CryptService.decrypt(): Couldn"t decrypted a message!');
          }
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  generatePGPKey(passphrase: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const key = await openpgp.generateKey({
          userIds: [{ name: `anon`, email: `$anon@hidden.chat` }], numBits: 4096, passphrase
        });

        if (key.publicKeyArmored && key.privateKeyArmored) {

          this.setPublicKey(key.publicKeyArmored);
          this.setPrivateKey(key.privateKeyArmored);

          resolve();
        } else {
          reject('CryptService.generatePGPKey(): Couln"t generate new key-pair!');
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  protected setPublicKey(key: string) {
    this.localdataService.set('publicKey', key);
    this.publicKey = key;
    this.logService.debug(`CryptService.generatePGPKey(): New public key: ${key}`);
  }

  protected setPrivateKey(key: string) {
    this.localdataService.set('privateKey', key);
    this.privateKey = key;
    this.logService.debug(`CryptService.generatePGPKey(): New private key: ${key}`);
  }

  protected toObject(str: string): any {
    return JSON.parse(str);
  }

  protected toString(obj: any): string {
    return JSON.stringify(obj);
  }

  protected isParseAble(str: string): boolean {
    try {
      JSON.parse(str);
      return true;
    } catch (err) {
      return false;
    }
  }
}
