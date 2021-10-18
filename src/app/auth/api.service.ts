import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';

@Injectable()
export class ApiService {

  constructor(public http: HttpClient, public globalService: GlobalService) { 

  }


  logar(cmd) {
    return this.http.post<any>(`${this.globalService.apiUrl}/account/login`, cmd);
  }

  cadastro(cadastro) {
    return this.http.post<any>(`${this.globalService.apiUrl}/account/register`, cadastro);
  }
  redefinir(redefinirEmail){
    return this.http.post<any>(`${this.globalService.apiUrl}/account/confirmEmail`, redefinirEmail);
  }
  reenviarEmail(reenviarEmail){
    return this.http.post<any>(`${this.globalService.apiUrl}/account/sendConfirmation`, reenviarEmail);
  }
}
