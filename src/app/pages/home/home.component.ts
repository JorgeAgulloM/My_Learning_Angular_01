import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  private userLogIn: boolean
  public infoUser: Array<string>

  constructor() {

    this.userLogIn = false
    this.infoUser = Array<string>() 
  }

  ngOnInit(): void {
    console.log("Inicio")

  }



  public getIsUserLogIn(): boolean {
    return this.userLogIn
  }

  public setUserLogIn(): void {
    this.userLogIn = !this.userLogIn
  }

  public getInfoUser(): Array<string> {
      return this.infoUser
  }

  public setInfoUser(value: Array<string>): void {
      this.infoUser = value
      this.setUserLogIn()

      

      console.log(this.infoUser)     
  }
}
