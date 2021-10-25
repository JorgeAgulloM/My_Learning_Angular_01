import { HomeComponent } from './../home/home.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  private home: HomeComponent
  private showLogin: boolean
  private showRegister: boolean

  constructor() { 
    this.home = new HomeComponent
    this.showLogin = true
    this.showRegister = false
  }

  ngOnInit(): void {
  }

  public getShowLogin(): boolean {
    return this.showLogin
  }

  public setShowLogin(): void {
    this.showRegister = false
    this.showLogin = !this.showLogin
  }

  public getShowRegister(): boolean {
    return this.showRegister
  }

  public setShowRegister(): void {
    this.showLogin = false
    this.showRegister = !this.showRegister
  }

  

}
