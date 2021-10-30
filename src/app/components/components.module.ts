import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginCardComponent } from './login-card/login-card.component';
import { RegisterCardComponent } from './register-card/register-card.component';
import { ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    LoginCardComponent,
    RegisterCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginCardComponent,
    RegisterCardComponent
  ]
})
export class ComponentsModule { }
