import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(password: string, rePassword: string): boolean {
    return password.toString == rePassword.toString;
  }

}
