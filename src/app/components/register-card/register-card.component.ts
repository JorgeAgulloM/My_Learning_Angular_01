import { IndexComponent } from '../../pages/index/index.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { RegisterForm } from 'src/app/models/registerForm';


@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.css'],

})
export class RegisterCardComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private userSrv: UsersService,
    private index: IndexComponent
    ) { }

  valideRegister = this.fb.group({
    name: ['', Validators.minLength(3)],
    lastName: ['', Validators.minLength(3)],
    //Valido para españa, números que al menos, su valor, sea de 9 digitos
    phone: ['', Validators.min(100000000)],
    email: ['', Validators.compose([Validators.email, Validators.required])],
    reEmail: ['', Validators.compose([Validators.email, Validators.required])],
    address: [''],
    state: [''],
    city: [''],
    password: ['', Validators.minLength(8)],
    rePassword: ['', Validators.minLength(8)],
    conditions: ['', Validators.required],
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
      this.valideRegister.value.reEmail,
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
    return this.liveValidations('password', 'rePassword')
  }

  getEmailOk(): boolean {
    return this.liveValidations('email', 'reEmail')
  }

  liveValidations(value: string, reValue: string): boolean {
    //  Si aun no se han manipulado los inputs
    if (!this.valideRegister.get(value)?.touched || !this.valideRegister.get(reValue)?.touched ) {
      //this.valideRegister.get(value)?.valid
      return true

    //  Si se han manipulado y el input 'principal' es correcto, además de que ambos campos son identicos
    } else if (this.valideRegister.get(value)?.valid && 
              (this.valideRegister.get(value)?.value === this.valideRegister.get(reValue)?.value)) {

              return true
    } else {
      // En caso de que no se cumpla lo anterior
      return false
    }

  }

  gotToLogin(): void {
    this.index.setShowLogin()
  }

}
