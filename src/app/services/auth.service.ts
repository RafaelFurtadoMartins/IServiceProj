import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TemplateDefinitionBuilder } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { tap } from 'rxjs/operators';
import { prestadores } from '../models/models.prestadores.component';
import { EnvService } from './env.service';
import { service } from '../models/models.servicos.component';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn = false;
  token:any;

  constructor(
    private http: HttpClient,
    private storage: NativeStorage,
    private env: EnvService
    
  ) { }

   registerServico(categoria: String, subCategoria: String,
    servico: String, cidade: String) 
    {
    return this.http.post(this.env.API_URLservice,{
      categoria: categoria, subCategoria: subCategoria,
      servico: service, cidade: cidade }
    )
  }

  login(email: String, password: String) {
    return this.http.post(this.env.API_URLlogin,
      {email: email, password: password}
    ).pipe(
      tap(token => {
        this.storage.setItem('token', token)
        .then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('Error storing item', error)
        );
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
  }


  register(name: String, email: String, cpf: String, telephone: String, password: String) {
    return this.http.post(this.env.API_URLregister, 
      {name: name, email: email, cpf: cpf, telephone: telephone, password: password}
    )
  }

  logout() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });

    return this.http.get(this.env.API_URLlogout + 'auth/logout', { headers: headers })
    .pipe(
      tap(data => {
        this.storage.remove("token");
        this.isLoggedIn = false;
        delete this.token;
        return data;
      })
    )
  }

  
  // user() {
  //   const headers = new HttpHeaders({
  //     'Authorization': this.token["token_type"]+" "+this.token["access_token"]
  //   });

  //   return this.http.get<prestadores>(this.env.API_URL + 'auth/user', { headers: headers })
  //   .pipe(
  //     tap(user => {
  //       return user;
  //     })
  //   )
  // }

  getToken() {
    return this.storage.getItem('token').then(
      data => {
        this.token = data;

        if(this.token != null) {
          this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;
      }
    );
  }
  // public cadastrar(service: service) {
  //   return this.http.post(this.API_URL, service);
  // }
}

