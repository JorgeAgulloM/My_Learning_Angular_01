import { StartComponent } from './../../pages/start/start.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { RegisterForm } from 'src/app/models/registerForm';


@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.css']
})
export class RegisterCardComponent implements OnInit {

  private passOk: boolean
  private pass: string
  private rePass: string

  constructor(
    private fb: FormBuilder,
    private userSrv: UsersService,
    private Start: StartComponent) {
      this.passOk = false
      this.pass = ""
      this.rePass = ""
    }

  valideRegister = this.fb.group({
    name: ['',  Validators.minLength(3)],
    lastName: ['',  Validators.minLength(3)],
    //Valido para españa, números que al menos, su valor, sea de 9 digitos
    phone: ['',  Validators.min(100000000)],
    email: ['',  Validators.email],
    address: [''],
    state: [''],
    city: [''],
    password: ['',  Validators.minLength(8)],
    rePassword: ['',  Validators.required],
    conditions: ['',  Validators.required]
    //validator: this.checkPass
  })

  ngOnInit(): void {
  }



  sendRegister(): void{
    console.log("Enviado datos del nuevo usuario...")

    let value: RegisterForm = new RegisterForm(
      this.valideRegister.value.name,
      this.valideRegister.value.lastName,
      this.valideRegister.value.phone,
      this.valideRegister.value.email,
      this.valideRegister.value.address,
      this.valideRegister.value.city,
      this.valideRegister.value.state,
      this.valideRegister.value.password,
      this.valideRegister.value.rePassword,
      this.valideRegister.value.conditions
    )

    console.log(`Enviado el formulario con los valores ${value.get_email()} y ${value.get_password()}`)
    this.userSrv.newUserRegistered(value)
  }

  getPassOk(): boolean {
    return this.passOk
  }

  getPass(): string {
    return this.pass
  }

  setPassOk(): void {
    this.passOk = (
      this.pass == this.rePass
      )
  }

  setPass(event: any): void {
    this.pass = event.target.value
    this.setPassOk()
  }

  getRePass(): string {
    return this.rePass
  }

  setRePass(event: any): void {
    this.rePass = event.target.value
    this.setPassOk()
  }



/*   checkPass(group: FormGroup) {
    let pass = group.controls.password.value
    let rePass = group.controls.rePassword.value
    let value: any = pass === rePass ? null : { notSame: true }

    if (value != null) {
      this.passOk = true
    } else {
      this.passOk = false
    }

    return value
  } */

  gotToLogin(): void {
    this.Start.setShowLogin()
  }

}
