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
    ) {}

  valideRegister = this.fb.group({
    name: ['', Validators.minLength(3)],
    lastName: ['', Validators.minLength(3)],
    //Valido para españa, números que al menos, su valor, sea de 9 digitos
    phone: ['', Validators.min(100000000)],
    email: ['', Validators.compose([Validators.email, Validators.required])],
    reEmail: ['', Validators.required],
    address: [''],
    state: [''],
    city: [''],
    password: [''],
    rePassword: [''],
    conditions: ['', Validators.required],
  })

  valideRegisterPass = this.fb.group({
    password: ['', Validators.minLength(8)],
    rePassword: ['', Validators.required]
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
      this.valideRegisterPass.value.password,
      this.valideRegisterPass.value.rePassword,
      this.valideRegister.value.conditions
    )

    console.log(`Enviado el formulario con los valores ${value.get_email()} y ${value.get_password()}`)
    this.userSrv.newUserRegistered(value)
  }

  getPassOk(): boolean {
    return (this.valideRegisterPass.get('password')?.value === this.valideRegisterPass.get('rePassword')?.value)
            && this.valideRegisterPass.get('password')?.valid == true && this.valideRegisterPass.get('rePassword')?.valid == true//this.valideRegisterPass.status == "VALID"//this.passOk
  }

  getEmailOk(): boolean {

    return false
  }



/*   getMyValidator() {
    let valuePass = this.myValidatorPass
    let valueEmail = this.myValidatorEmail

    if (valuePass != null && valuePass == {'invalid': true}){
      this.passOk = true
    }


    }

  myValidatorPass(fGroup: FormGroup) {
    let pass = fGroup.get('password')?.value
    let rePass = fGroup.get('rePassword')?.value
    let passOk = pass === rePass

    this.passOk = passOk
    console.log("passOK = " + this.passOk)

    return passOk ? null : {'invalid': true}
  }

  myValidatorEmail(fGroup: FormGroup){
    let email = fGroup.get('email')?.value
    let reEmail = fGroup.get('reEmail')?.value
    let emailOk = email === reEmail

    this.emailOk = emailOk != null ? emailOk : false
    console.log("emailOk = " + this.emailOk)

    return emailOk//emailOk ? null : {'invalid': true}
  } */

  gotToLogin(): void {
    this.index.setShowLogin()
  }



 /*  setLifeValidations(fg: FormGroup): void {
    let values = Array<number>(10)
    let inputs = Array<string>('name', 'lastName', 'phone', 'email', 'address', 'city', 'state', 'password', 'rePasword', 'conditions')

      values.forEach(element => {
        const CONDITION_ONE: boolean = (fg?.get(inputs[element])!.touched && fg?.get(inputs[element])!.status != 'VALID')
        const CONDITION_TWO: boolean = (fg?.get(inputs[element])!.touched && fg?.get(inputs[element])!.status == 'VALID')
        values[element] = CONDITION_ONE ? 1 : CONDITION_TWO ? 2 : 0
      }
    );

    this.lifeValidations = values
  }

  getLifeValidations(value: number): number {
    this.setLifeValidations
    console.log(this.lifeValidations[value])
    return this.lifeValidations[value]
  } */

}
