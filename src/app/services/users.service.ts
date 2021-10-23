import { Injectable } from '@angular/core';
import { LoginForm } from '../models/loginForm';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor() { }
  
  sendMessage(login: LoginForm):void {
    console.log(`Los datos han sido enviados para el usuario:
    ${login.getEmail()}`)
  }
}
