import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface servico{
  id: string;
  titulo: string;
  descricao: string;
  categoria: string;
  subcategoria: string;
  Cidade_estado: string;
  nome: string;

}
@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  private url = 'http://127.0.0.1:8000/api/servico';
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<[servico]>(this.url);
  }
}
