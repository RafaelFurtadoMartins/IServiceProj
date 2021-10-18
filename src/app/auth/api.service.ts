import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

  constructor(public http: HttpClient, public globalService: GlobalService) { 

  }


  logar(cmd) {
    return this.http.post<any>(`${this.globalService.apiUrl}/account/login`, cmd);
  }

  cadastro(cadastro): Observable<any> {
    return this.http.post<any>(`${this.globalService.apiUrl}/account/register`, cadastro);
  }

}
