import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //  Propiedades de la clase
  private userLogIn: boolean
  private infoUser: Array<string>

  //  Se declaran el router activado, el router y el servicio en el constructor
  constructor(
    private activeRouting: ActivatedRoute,
    private routing: Router,
    private usersSrv: UsersService
    )
    {
      //  Se da valor inicial a las propiedades
    this.userLogIn = false
    this.infoUser = Array<string>()
  }

  ngOnInit(): void {
    // Se comprueba si el método nos devuelve un true y si un usuario ha hecho login
    if(this.setInfoUser() && this.usersSrv.getUserLoged())
      this.userLogIn = true //Se guarda el estado
    //Si no hay un usuario que ha hecho login se llama a la función de cierre de sesión para volver a index
    if (!this.userLogIn)
      this.closeSession()

  }

  //  getters y setters convencionales
  getIsUserLogIn(): boolean {
    return this.userLogIn
  }

  setUserLogIn(value: boolean): void {
    this.userLogIn = value
  }

  getInfoUser(): Array<string> {
      return this.infoUser
  }

  // Getter para obtener solo un valor del array de datos del usuario
  getInfoUserValue(value: number): string {
    return this.infoUser[value]
  }

  //  Setter modificado para obtener los datos del usuario que inicia sesión
  private setInfoUser(): boolean {
    // Si hay dato pasado por router
    if (this.activeRouting.snapshot.paramMap.get('email') != null) {
      //  Se carga los datos obtenidos del servicio
      let userData = this.usersSrv.getRegisterUser(this.activeRouting.snapshot.paramMap.get('email')!)
      //  En caso de que existan esos datos y no nos devuelva un indefinido
      if (userData != undefined) {
        // Separa los valores del diccionario y los guarda en el array
        Object.entries(userData).forEach(
          ([key, value]) => this.infoUser.push(value)
        )
        return true

      } else {
        return false
      }

    } else {
      return false
    }

  }

  //  Cierra la sesión vaciando los tados del usuario, pasando userLogin a false y devolviendo la web a index y login.
  closeSession(): void {
    this.userLogIn = false
    this.usersSrv.setUserLoged(false)
    this.infoUser = []
    this.goToIndex()
  }

  // Función para navegar a index
  private goToIndex(): void {
    this.routing.navigate(['./index'])
  }

}
