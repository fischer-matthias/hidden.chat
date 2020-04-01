/*
  LocaldataService - Simple wrapper for the localstorage
*/

import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class LocaldataService {
  constructor(protected logService: LogService) { }

  get(key: string): any {
    this.logService.debug(`LocaldataService: get(${key})`);
    return localStorage.getItem(key);
  }

  set(key: string, item: any): void {
    this.logService.debug(`LocaldataService: set(${key})`);
    localStorage.setItem(key, item);
  }
}
