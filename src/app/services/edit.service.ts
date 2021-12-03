import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { servico } from './servico.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  public API_URLms = 'http://localhost:8000/api/Mservice';
  public API_URLat = 'http://localhost:8000/api';
  public API_URLde = 'http://localhost:8000/api'
  constructor(
    private http: HttpClient,
    private auth: AuthService,
  ) {

  }


  Mservice(token: any):Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': token["token_type"] + " " + token["token"]
    });
    return this.http.get<[servico]>(this.API_URLms, { headers });

  }

  Atualizar(token: any,servico):Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': token["token_type"] + " " + token["token"]
    });
    return this.http.put(`${this.API_URLat}/update/${servico.id}`,servico, { headers });

  }
  Deletar(token:any ,servico){
    const headers = new HttpHeaders({
      'Authorization': token["token_type"] + " " + token["token"]
    });
    return this.http.delete(`${this.API_URLde}/delete/${servico}`, { headers });
  }
}
