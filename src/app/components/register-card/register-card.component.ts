import { HomeComponent } from './../../pages/home/home.component';
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

  private home: HomeComponent

  constructor(
    private fb: FormBuilder,
    private userSrv: UsersService) {
      this.home = new HomeComponent
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
      rePassword: ['',  Validators.minLength(8)],
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

    //this.userSrv.sendMessageReg(value, this.home)

    console.log(`Enviado el formulario con los valores ${value.get_email()} y ${value.get_password()}`)
    this.userSrv.newUserRegistered(value)

    //this.routing.navigate(['./home'])
    
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