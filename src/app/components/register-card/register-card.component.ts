import { IndexComponent } from '../../pages/index/index.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { RegisterForm } from 'src/app/models/registerForm';


@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.css'],
  
})
export class RegisterCardComponent implements OnInit {

  private passOk: boolean
  private pass: string
  private rePass: string

  constructor(
    private fb: FormBuilder,
    private userSrv: UsersService,
    private index: IndexComponent,
    private lifeValidator: LifeValidator
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
  },{

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
    this.index.setShowLogin()
  }

  probando(): void {
    console.log(this.lifeValidator.reviewData())
    
  }

}

export class LifeValidator {

  constructor(private fg: FormGroup,
    private fc: FormControl){}

  reviewData(): Array<number> {
    let values = Array<number>(9)
    let inputs = Array<string>('name', 'lastName', 'phone', 'email', 'address', 'city', 'state', 'password', 'rePasword', 'conditions')
    
      values.forEach(element => { 
      const CONDITION_ONE: boolean = (this.fg.controls[inputs[element]].touched && this.fg.controls[inputs[element]].status != 'VALID')
      const CONDITION_TWO: boolean = (this.fg.controls[inputs[element]].touched && this.fg.controls[inputs[element]].status == 'VALID')
      values[element] = CONDITION_ONE ? 1 : 
                        CONDITION_TWO ? 2 :
                                        0 ;                 
    });

    return values
  }
}