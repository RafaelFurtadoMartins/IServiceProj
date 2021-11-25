import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URLlogin = '';
  API_URLregister = 'http://localhost:8000/api/user';
  API_URLservice = 'http://localhost:8000/api/servico';
  API_URLlogout = '';

  constructor() { }
}