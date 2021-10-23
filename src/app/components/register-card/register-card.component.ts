import { HomeComponent } from './../../pages/home/home.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { RegisterForm } from 'src/app/models/registerForm';
@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.css']
})
export class RegisterCardComponent implements OnInit {

  

  constructor(
    private fb: FormBuilder,
    private userSrv: UsersService,
    private routing: Router,
    private home: HomeComponent) { }

    valideRegister = this.fb.group({
      name: ['',  Validators.minLength(3)],
      lastName: ['',  Validators.minLength(3)],
      //Valido para españa, números que al menos, su valor, sea de 9 digitos
      phone: ['',  Validators.min(100000000)], 
      email: ['',  Validators.email],
      password: ['',  Validators.minLength(8)],
      rePassword: ['',  Validators.minLength(8)],
      conditions: ['',  Validators.required]
      
    })

  ngOnInit(): void {
  }
 
  validatePass(): boolean{
    let valid: boolean = false



    return valid
  }

  sendRegister(): void{
    console.log("Enviado datos del nuevo usuario...")

    let value: RegisterForm = new RegisterForm(
      this.valideRegister.value.name,
      this.valideRegister.value.lastName,
      this.valideRegister.value.phone,
      this.valideRegister.value.email,
      //this.valideLogin.value.address,
      //this.valideLogin.value.city,
      //this.valideLogin.value.state,
      this.valideRegister.value.password,
      this.valideRegister.value.rePassword,
      this.valideRegister.value.conditions
    )

    this.userSrv.sendMessageReg(value)

    this.home.setShowLogin()
  }

}

/* export class validateEquals {
    private control = FormGroup



    return1(): void{ 
      const password = control.get("password")
      const confirmPassword = control.get("confirmPassword")
      password?.value === confirmPassword?.value
      ? null
      : {nonEquals: true}}
}  */