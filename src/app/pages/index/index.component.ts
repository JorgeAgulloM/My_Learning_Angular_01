import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  private showLogin: boolean
  private showRegister: boolean

  constructor() {
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
