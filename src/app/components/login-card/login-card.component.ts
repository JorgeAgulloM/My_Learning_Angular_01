import { IndexComponent } from '../../pages/index/index.component';
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
    private index: IndexComponent) {
    }

  valideLogin = this.fb.group({
    email: ['',  Validators.email],
    password: ['',  Validators.minLength(8)]
  })

  ngOnInit(): void {
  }

  sendLogin(): void{
      let value: LoginForm = new LoginForm(
        this.valideLogin.value.email,
        this.valideLogin.value.password
      )

      console.log(`Enviado el formulario con los valores ${value.getEmail()} y ${value.getPassword()}`)
      this.userSrv.userLogin(value.getEmail(), value.getPassword())

  }

  getValidEmail(): boolean{
    return this.valideLogin.value(this.getValidEmail)
  }

  goToRegister(): void {
    this.index.setShowRegister()
  }

}
