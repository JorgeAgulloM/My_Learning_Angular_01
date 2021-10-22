import { HomeComponent } from './../../pages/home/home.component';
import { LoginForm } from 'src/app/models/loginForm';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})

export class LoginCardComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private userSrv: UsersService,
    private home: HomeComponent) { }


  valideLogin = this.fb.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required, Validators.min(8)]
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

}
