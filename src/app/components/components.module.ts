import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginCardComponent } from './login-card/login-card.component';
import { RegisterCardComponent } from './register-card/register-card.component';



@NgModule({
  declarations: [
    LoginCardComponent,
    RegisterCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginCardComponent,
    RegisterCardComponent
  ]
})
export class ComponentsModule { }
