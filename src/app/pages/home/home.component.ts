import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private userLogIn: boolean
  private infoUser: Array<string>

  constructor(
    private activeRouting: ActivatedRoute,
    private routing: Router,
    private usersSrv: UsersService
    ) {

    this.userLogIn = false
    this.infoUser = Array<string>()
  }

  ngOnInit(): void {
    console.log("Inicio de Home")

    this.activeRouting.snapshot.paramMap.get('email') != null ?
      this.setInfoUser(this.usersSrv.getRegisterUser(this.activeRouting.snapshot.paramMap.get('email')!))
      :
      this.setInfoUser(this.usersSrv.getRegisterUser('default'))

    if (this.infoUser == null || this.infoUser.length == 0) {
      this.routing.navigate(['./index'])
    }

  }

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

  public setInfoUser(valueDicc = this.activeRouting.snapshot.params): void {
    this.setUserLogIn(true)

    Object.entries(valueDicc).forEach(
      ([key, value]) => this.infoUser.push(value)
    )
      console.log(this.infoUser)
  }

  public closeSession(): void {
    this.setUserLogIn(false)
    this.infoUser = []
    this.routing.navigate(['./index'])
  }
}
