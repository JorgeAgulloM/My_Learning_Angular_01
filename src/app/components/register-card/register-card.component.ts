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
    private Start: StartComponent
    ) {
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

  gotToLogin(): void {
    this.Start.setShowLogin()
  }

  //value: any = pass === rePass ? null : { notSame: true }
}

// custom validator to check that two fields match
/* export function MustMatch() {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls['password'];
      const matchingControl = formGroup.controls['rePassword'];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          console.log("Error con el pass")
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
          console.log(" pass ok")
      } else {
          matchingControl.setErrors(null);
          console.log("Error con el pass")
      }
  }
} */
