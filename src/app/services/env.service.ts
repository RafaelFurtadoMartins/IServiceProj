import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URLlogin = 'http://localhost:8000/api/login';
  API_URLregister = 'http://localhost:8000/api/register';
  API_URLservice = 'http://localhost:8000/api/servico';
  API_URLlogout = '';

  constructor() { }
}