import { Router } from '@angular/router';
import { HomeComponent } from './../pages/home/home.component';
import { Injectable } from '@angular/core';
import { LoginForm } from '../models/loginForm';
import { RegisterForm } from '../models/registerForm';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private registerUser = new Array<RegisterForm>()
  //private reg: RegisterForm = {}

  constructor(
    private routing: Router
    ) {
    this.registerUser.push(new RegisterForm(
      "Jorge",
      "Agulló Martín",
      "666332211",
      "jorge@mail.com",
      "Calle de la liada nº 1",
      "Elche",
      "Alicante",
      "12345678",
      "12345678",
      true)
      )
    }
  
  sendMessage(login: LoginForm): void {
    console.log(`Los datos han sido enviados para el usuario:
    ${login.getEmail()}`)
  }

  sendMessageReg(register: RegisterForm, home: HomeComponent): void {
    console.log(`Los datos han sido registrados para el nuevo usuario:
    ${register.get_email()}`)
    home.setInfoUser([register.get_name(), register.get_email()])
    console.log("Usuario logeado")
  }

  queryUserRegitered(email: string, pass: string): number {
    let result: number = 0
    this.registerUser.forEach(element => {
      if (element.get_email() == email) {
        if (element.get_password() == pass) {
          result = 3
        } else {
          result = 2
        }
      } else {
        result = 1
      }
    });

    return result
  }

  userLogin(email: string, pass: string): void {
    let result: number = this.queryUserRegitered(email, pass)
    switch(result){
      case 0:
        alert("Fallo")
        break
      case 1:
        alert("Usuario no registrado")
        break
      case 2:
        alert("La constraseña no es corecta")
        break
      case 3:
        this.routing.navigate(['./home'])
        break
      default:{
        alert("Error al iniciar.")
        break
      }
    }
  }

  newUserRegistered(registerUser = new RegisterForm): number{
    let result: number = this.queryUserRegitered(registerUser.get_email(), "00000000")
    if (result < 2) {
      this.registerUser.push(new RegisterForm(
        registerUser.get_name(),
        registerUser.get_lastName(),
        registerUser.get_phone(),
        registerUser.get_email(),
        registerUser.get_address(),
        registerUser.get_city(),
        registerUser.get_state(),
        registerUser.get_password(),
        registerUser.get_rePassword(),
        registerUser.get_conditions())
        )
        this.routing.navigate(['./home'])
        result = 3
    } else {
      alert("El usuario ya está registrado, por favor, introduce otro email.")
      result = 2
    }
    return result
  }

}
