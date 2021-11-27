import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { service } from '../models/models.servicos.component';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  public API_URL = 'http://localhost:8000/api/servico'; 
  constructor(
    private http: HttpClient,
  ) {

   }

  public registerServico(titulo: String, descricao: String, cidade: String) {
    return this.http.post(this.API_URL, service);
  }
}





