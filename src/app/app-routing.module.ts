import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './modules/post-login-module/create-user/create-user.component';
import { UserDetailsComponent } from './modules/post-login-module/user-details/user-details.component';
import { UserComponent } from './modules/post-login-module/user/user.component';
import { LoginComponent } from './modules/pre-login-module/login/login.component';
import { RegistrationComponent } from './modules/pre-login-module/registration/registration.component';

const routes: Routes = [
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'registration',
  component: RegistrationComponent
},
{
  path: 'user',
  component: UserComponent
},
{
  path: 'create-user',
  component: CreateUserComponent
},
{
  path: 'user-details/:id',
  component: UserDetailsComponent
},
{
  path: '**',
  component: LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
