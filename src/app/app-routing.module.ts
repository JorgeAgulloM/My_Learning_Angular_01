import { StartComponent } from './pages/start/start.component';
import { LoginForm } from './models/loginForm';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterCardComponent } from './components/register-card/register-card.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'start',
    pathMatch:'full'
  },
  {
    path: 'start',
    component: StartComponent,
    pathMatch:'full'
  },
  {
    path: 'home/:email',
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    path: 'register',
    component: RegisterCardComponent,
    pathMatch:'full'
  },
  {
    path: 'login',
    component: LoginForm,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
