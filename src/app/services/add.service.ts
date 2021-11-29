import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { service } from '../models/models.servicos.component';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  public API_URL = 'http://localhost:8000/api/service'; 
  constructor(
    private http: HttpClient,
  ) {

   }

  public registerServico(categoria: String, subCategoria: String, titulo: String, descricao: String, cidade: String) {
    return this.http.post(this.API_URL, service);
  }
}





