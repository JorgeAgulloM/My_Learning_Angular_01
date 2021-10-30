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
    ) {

      //  Se da valor inicial a las propiedades
    this.userLogIn = false
    this.infoUser = Array<string>()
  }

  ngOnInit(): void {

    //  Si el email no es nulo se solicita al servicio la opteción de los datos del usuario con dicho email
    this.activeRouting.snapshot.paramMap.get('email') != null ?
      this.setInfoUser(this.usersSrv.getRegisterUser(this.activeRouting.snapshot.paramMap.get('email')!))
      : //  no devuelve nada
      this.setInfoUser(this.usersSrv.getRegisterUser('default'))

    //  Evita que se acceda a home desde la barra de navegación
    if (this.infoUser == null || this.infoUser.length == 0) {
      this.routing.navigate(['./index'])
    }
  }

  //  getters y setters convencionales
  public getIsUserLogIn(): boolean {
    return this.userLogIn
  }

  public setUserLogIn(value: boolean): void {
    this.userLogIn = value
  }

  public getInfoUser(): Array<string> {
      return this.infoUser
  }

  public getInfoUserValue(value: number): string {
    return this.infoUser[value]
}

  //  Setter modificado para devolver el valor del parámetro solicitado
  public setInfoUser(valueDicc = this.activeRouting.snapshot.params): void {
    this.setUserLogIn(true)

    Object.entries(valueDicc).forEach(
      ([key, value]) => this.infoUser.push(value)
    )
      
  }

  //  Cierra la sesión vaciando los tados del usuario, pasando userLogin a false y devolviendo la web a index y login.
  public closeSession(): void {
    this.setUserLogIn(false)
    this.infoUser = []
    this.routing.navigate(['./index'])
  }
}
