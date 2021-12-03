import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Observable } from 'rxjs';

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

  getAll():Observable<any>{
    return this.http.get<[servico]>(this.url);
  }
  
  show(id,token):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': token["token_type"] + " " + token["token"]
});

    return this.http.get<any>(`${this.url}/show/${id}`,{headers});
  }
  delete(){

  }
}
