import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  login(){
    console.log("LOGUEANDO")
  }

  register(){
    console.log("REGISTRANDO")
  }

  logOut(){

  }
}
