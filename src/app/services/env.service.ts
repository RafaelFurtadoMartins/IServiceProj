import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = '';
  // tirei o endereço de url parou o erro do cors :http://127.0.0.1:8000/
  constructor() { }
}