import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../models/registerForm';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //  Propiedad de la clase
  private registerUser = new Array<RegisterForm>()

  //  Se inicia el router en el constructor
  constructor(
    private routing: Router
    ) {
      //  Se crea un usuario inicial para poder acceder a login
    this.registerUser.push(new RegisterForm(
        "Jorge",
        "Agulló Martín",
        "666332211",
        "jorge@mail.com",
        "jorge@mail.com",
        "Calle de la liada nº 1",
        "Elche",
        "Alicante",
        "12345678",
        "12345678",
        true)

      )
    }

      /* Función para saber datos de login del usuario.
      Los número negativos representas estados fallidos, del 0 en adelante referencia la posición en el
      array de datos.
      */
  queryUserRegitered(email: string, pass: string): number {
    let result: number = -3 //Error en la lectura del Array, Se modifica si las siguientes condiciones se realizan

    //  Comprueba los elementos del registro para saber si existe el usuaio y su comparar su clave.
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

    return result //Se devuelve un resuttado para conocer la información del usuario
  }

  // Función que averigua si existe o no el usuario y actua en consecuencia
  userLogin(email: string, pass: string): void {
    //  llama a la revisión de datos del usuario
    let result: number = this.queryUserRegitered(email, pass)

    //  Dependiendo de la info que se reciba...
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
      default:{ //  Se navega hasta home y se pasa el "id" o email de usuario registrado
        this.routing.navigate(['./home', this.registerUser[result].get_email()])
        break
      }
    }
  }

  //  Obtención de los datos del usuario.
  newUserRegistered(registerUser = new RegisterForm): void{
    //  Se pretende conocer si existe o no el usuario
    let result: number = this.queryUserRegitered(registerUser.get_email(), "00000000")
    //  Si no existe se almacenan
    if (result == -1) {
      this.registerUser.push(new RegisterForm(
        registerUser.get_name(),
        registerUser.get_lastName(),
        registerUser.get_phone(),
        registerUser.get_email(),
        registerUser.get_reEmail(),
        registerUser.get_address(),
        registerUser.get_city(),
        registerUser.get_state(),
        registerUser.get_password(),
        registerUser.get_rePassword(),
        registerUser.get_conditions())
        )

        // navega a home y pasa el id de usuario
        this.routing.navigate(['./home', this.registerUser[this.registerUser.length -1].get_email()])

    } else {

      // informa de la coincidencia
      alert("El usuario ya está registrado, por favor, introduce otro email.")
    }
  }

  //  Busca a un usuario registrado
  getRegisterUser(email: string): RegisterForm {
    return this.registerUser.filter(x => x.get_email() == email)[0]
  }

}
