import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNotesComponent } from './component/create-notes/create-notes.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DisplayNotesComponent } from './component/display-notes/display-notes.component';
import { ForgotemailComponent } from './component/forgotemail/forgotemail.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { GetAllNotesComponent } from './component/get-all-notes/get-all-notes.component';
import { GetArchiveComponent } from './component/get-archive/get-archive.component';
import { GetTrashComponent } from './component/get-trash/get-trash.component';
import { IconsComponent } from './component/icons/icons.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotemail', component: ForgotemailComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  {path:'display', component: DisplayNotesComponent},
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {path:'notes', component:GetAllNotesComponent},
      {path:'archive', component:GetArchiveComponent},
      {path:'trash', component:GetTrashComponent},    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
