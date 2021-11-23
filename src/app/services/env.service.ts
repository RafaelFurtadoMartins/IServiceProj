import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'http://localhost:8000/api/auth/login';
  API_URLr = 'http://localhost:8000/api/auth/register';
  API_URLservice = '';
  constructor() { }
}