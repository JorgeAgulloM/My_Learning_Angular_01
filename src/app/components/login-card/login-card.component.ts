import { IndexComponent } from '../../pages/index/index.component';
import { LoginForm } from 'src/app/models/loginForm';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})

export class LoginCardComponent {

  //  Variables del Form, el servicio y la web index declaradas en constructor
  constructor(
    private fb: FormBuilder,
    private userSrv: UsersService,
    private index: IndexComponent) {
    }

  //  Validación de los datos de login
  valideLogin = this.fb.group({
    email: ['',  Validators.email],
    password: ['',  Validators.minLength(8)]
  })

  //  Función para enviar los datos introducidos por el usuario al sevicio.
  sendLogin(): void{
      //  Se cargan los datos en la variable
      let value: LoginForm = new LoginForm(
        this.valideLogin.value.email,
        this.valideLogin.value.password
      )
      //  Se envian al servicio.
      this.userSrv.userLogin(value.getEmail(), value.getPassword())
  }

  //  Función para llamar a la función de index, la cual intercambia el componente Login por Register.
  goToRegister(): void {
    this.index.setShowRegister()
  }

}
