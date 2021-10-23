import { Injectable } from '@angular/core';
import { LoginForm } from '../models/loginForm';
import { RegisterForm } from '../models/registerForm';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  
  sendMessage(login: LoginForm):void {
    console.log(`Los datos han sido enviados para el usuario:
    ${login.getEmail()}`)
  }

  sendMessageReg(register: RegisterForm):void {
    console.log(`Los datos han sido enviados para el nuevo usuario:
    ${register.get_email()}`)
  }
}
