import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotemailComponent } from './component/forgotemail/forgotemail.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';

const routes: Routes = [
  {path:'register', component:RegistrationComponent},
  {path:'login', component:LoginComponent},
  {path:'forgotemail', component:ForgotemailComponent},
  {path:'forgotpassword', component:ForgotpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
