import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public apiUrl = 'http://127.0.0.1:8000/';

  constructor() { }



}


