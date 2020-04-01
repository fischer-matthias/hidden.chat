/*
  LogService - Simple wrapper for console.log()
*/

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  info(message: string) { this.printMessage(message, 'INFO'); }
  warn(message: string) { this.printMessage(message, 'WARNING'); }
  error(message: string) { this.printMessage(message, 'ERROR'); }

  debug(message: string) {
    if (environment.production) {
      return;
    } else {
      this.printMessage(message, 'DEBUG');
    }
  }

  protected printMessage(message: string, type: string): void {
    console.log(this.concatTime(`${message} (${type})`));
  }

  protected concatTime(message: string): string {
    return `${new Date().toString()}: ${message}`;
  }
}
