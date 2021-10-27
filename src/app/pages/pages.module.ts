import { IndexComponent } from './index/index.component';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent,
    IndexComponent
  ]
})
export class PagesModule { }
