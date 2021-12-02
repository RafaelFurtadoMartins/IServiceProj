import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { Key } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async setToken (key: string, value: any){
    await Storage.set({
      key, 
      value: JSON.stringify(value)
    });
  };
  
  async getToken(key: string):Promise <{value : any}> {
  const token = await Storage.get({
    key

  })
   return JSON.parse(token.value)
  };
  
  async removeName() {
    await Storage.remove({ key: 'name' });
  };
}
