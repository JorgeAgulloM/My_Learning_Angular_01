import { HomeComponent } from './../../pages/home/home.component';
import { LoginForm } from 'src/app/models/loginForm';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})

export class LoginCardComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private userSrv: UsersService,
    private routing: Router,
    private home: HomeComponent) { }

  valideLogin = this.fb.group({
    email: ['',  Validators.email],
    password: ['',  Validators.minLength(8)]
  })

  ngOnInit(): void {
  }

  sendLogin(): void{
    console.log("Enviado el formulario...")

      let value: LoginForm = new LoginForm(
        this.valideLogin.value.email,
        this.valideLogin.value.password
      )

      this.userSrv.sendMessage(value)

      this.home.setShowLogin()
  }

  getValidEmail(): boolean{
    return this.valideLogin.value(this.getValidEmail)
  }

  goToRegister(): void {
    this.routing.navigate(['./home'])
    this.home.setShowRegister()
  }

}
