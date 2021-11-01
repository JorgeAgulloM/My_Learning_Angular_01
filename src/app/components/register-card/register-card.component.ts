import { IndexComponent } from '../../pages/index/index.component';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { RegisterForm } from 'src/app/models/registerForm';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.css'],

})

export class RegisterCardComponent {

  // Variables del form, servicio e index declaradas en el constructor
  constructor(
    private fb: FormBuilder,
    private userSrv: UsersService,
    private index: IndexComponent
    ) { }

    //  Validación de los inputs de register

    /* DUDA!!!!!
      Puesto que los validadores exsigen la cumplimentación de un mínimo de caracteres
      o valores, o una validación de email, ¿No es necesario usar Validators.required, cierto?
    */

  valideRegister = this.fb.group({
    name: ['', Validators.minLength(3)], //Nombre de mínimo 3 caracteres
    lastName: ['', Validators.minLength(3)], //Apellido de mínimo 3 caracteres
    phone: ['', Validators.min(100000000)], //Valido para números que al menos sean de 9 digitos
    email: ['', Validators.email], //Se requiere una sintaxis correcta de email
    reEmail: ['', Validators.email], //Se requiere una sintaxis correcta de email
    address: [''],
    city: [''],
    state: [''],
    password: ['', Validators.minLength(8)], //Pass de mínimo 8 caracteres
    rePassword: ['', Validators.minLength(8)], //Pass de mínimo 8 caracteres
    conditions: ['', Validators.requiredTrue], //El selector de condiciones debe devolver true.
  })

  //  Función para enviar los datos al servicio y que este los almacene.
  sendRegister(): void{
    console.log("Enviado datos del nuevo usuario...")
    // Se instancia un nuevo RegisterForm con los datos
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
    //  Se envian al servicio
    this.userSrv.newUserRegistered(value)
  }

  //  get para confirmar si el pass es correcto en ambos campos
  getPassOk(): boolean {
    //  Se llama a la función para que averigue si son corectos los valores
    return this.liveValidations('password', 'rePassword')
  }

  //  get para confirmar si el email es correcto en ambos casos
  getEmailOk(): boolean {
    //  Se llama a la función para que averigue si son corectos los valores
    return this.liveValidations('email', 'reEmail')
  }

  //  Función para averiguar si los valores que se le pasan son identicos y validos.
  private liveValidations(value: string, reValue: string): boolean {
    //  Si aun no se han manipulado los inputs
    if (!this.valideRegister.get(value)?.touched || !this.valideRegister.get(reValue)?.touched ) {
      //this.valideRegister.get(value)?.valid
      return true

    //  Si se han manipulado y el input 'principal' es correcto, y ambos campos son identicos
    } else if (this.valideRegister.get(value)?.valid &&
              (this.valideRegister.get(value)?.value === this.valideRegister.get(reValue)?.value)) {
              return true
    } else {
      // En caso de que no se cumpla lo anterior
      return false
    }
  }

  //  Función para navegar al Login
  gotToLogin(): void {
    this.index.setShowLogin()
  }
}
