import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../models/registerForm';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private registerUser = new Array<RegisterForm>()

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

  queryUserRegitered(email: string, pass: string): number {
    let result: number = -3 //Error en la lectura del Array, en caso de que no

    this.registerUser.forEach(element => {
      if (element.get_email() == email) {
        if (element.get_password() == pass) {
          result = this.registerUser.indexOf(element) //Se devuelve el indice del usuario registrado.

        } else {
          result = -2 //La contraseña con coincide
        }

      } else {
        result = -1 //No existe el usuario

      }
    });

    return result
  }

  userLogin(email: string, pass: string): void {
    let result: number = this.queryUserRegitered(email, pass)

    switch(result){
      case -1:
        alert("Usuario no registrado")
        break
      case -2:
        alert("La constraseña no es corecta")
        break
      case -3:
        alert("Error en la consulta.")
        break
      default:{
        //this.routing.navigate(['./home', this.getRegisterUser(this.registerUser[result].get_email())])
        this.routing.navigate(['./home', this.registerUser[result].get_email()])
        break
      }
    }
  }

  newUserRegistered(registerUser = new RegisterForm): void{
    let result: number = this.queryUserRegitered(registerUser.get_email(), "00000000")
    console.log('newUserRegistered' + result)
    if (result == -1) {
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

        this.routing.navigate(['./home', this.registerUser[this.registerUser.length -1].get_email()])

    } else {
      alert("El usuario ya está registrado, por favor, introduce otro email.")
    }
  }

  getRegisterUser(email: string): RegisterForm {
    console.log(email)
    console.log('Valor de getRegisterUser' + this.registerUser.filter(x => x.get_email() == email)[0])
    return this.registerUser.filter(x => x.get_email() == email)[0]

  }

}
