import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  //  Propiedades de la clase
  private showLogin: boolean
  private showRegister: boolean

  // constructor y propiedades inicializadas.
  constructor() {
    this.showLogin = true
    this.showRegister = false
  }

  ngOnInit(): void {
  }

  // getter para conocer si se muestra el login
  public getShowLogin(): boolean {
    return this.showLogin
  }

  //  setter para mostrar el login y ocultar el register
  public setShowLogin(): void {
    this.showRegister = false
    this.showLogin = !this.showLogin
  }

  // getter para conocer si se muestra el register
  public getShowRegister(): boolean {
    return this.showRegister
  }

 //  setter para mostrar el register y ocultar el login
  public setShowRegister(): void {
    this.showLogin = false
    this.showRegister = !this.showRegister
  }

}
