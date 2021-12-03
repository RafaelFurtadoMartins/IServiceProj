import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { service } from '../models/models.servicos.component';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  public API_URL = 'http://localhost:8000/api/service'; 
  constructor(
    private http: HttpClient,
    private auth: AuthService,
  ) {

   }

  public registerServico( servico: any, token: any  ):Observable<any>
   {
     
    const headers = new HttpHeaders({
          'Authorization': token["token_type"] + " " + token["token"]
    });
    return this.http.post<any>(this.API_URL,servico ,{headers});
  }
}





