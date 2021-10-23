import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent   {

  private showLogin: boolean
  private showRegister: boolean

  constructor() {
    this.showLogin = false
    this.showRegister = false
   }

  public getShowLogin(): boolean {
    console.log("home.GetLogin " + this.showLogin)
    return this.showLogin
  }

  public setShowLogin(): void {
    console.log("home.SetLogin " + this.showLogin)
    this.showRegister = false
    this.showLogin = !this.showLogin
  }

  public getShowRegister(): boolean {
    console.log("home.GetRegister " + this.showRegister)
    return this.showRegister
  }

  public setShowRegister(): void {
    console.log("home.SetRegister " + this.showRegister)
    this.showLogin = false
    this.showRegister = !this.showRegister
  }

}
