import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  login(user) {

      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;

  }
  logout() {
    localStorage.removeItem('currentUser');
  }
  public get loggedIn(): boolean {
    return (localStorage.getItem('currentUser') !== null);
  }
  cadastro(){
    // localStorage.setItem('currentUser', JSON.stringify(user));
    return true; 
  }
}  
