import { PipesModule } from './pipes.module';
import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';
import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(password: string, rePassword: string): boolean {
    return password.toString == rePassword.toString;
  }

}
