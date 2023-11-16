import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/interface/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  authService = inject(AuthService)
  router = inject(Router);
  errorLogin = signal(false);
  cargando = signal(false);

  loginData: LoginData= {
    Email:"",
    Password: ""
  }

  login(){
    this.authService.login(this.loginData).then(res => {
      if(res) this.router.navigate(["/contacts"]);
      else {
        this.errorLogin.set(true)
      };
      this.cargando.set(false);
    });
  }
}
