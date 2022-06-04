import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotemailComponent } from './component/forgotemail/forgotemail.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { CreateNotesComponent } from './component/create-notes/create-notes.component';
import { MatCardModule } from '@angular/material/card';
import { DisplayNotesComponent } from './component/display-notes/display-notes.component';
import { IconsComponent } from './component/icons/icons.component';
import { GetAllNotesComponent } from './component/get-all-notes/get-all-notes.component';
import { GetArchiveComponent } from './component/get-archive/get-archive.component';
import { GetTrashComponent } from './component/get-trash/get-trash.component';
import { UpdateNotesComponent } from './component/update-notes/update-notes.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { AuthguardserviceService } from './services/AuthGuardService/authguardservice.service';
import { RouterModule } from '@angular/router'; 
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotemailComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    CreateNotesComponent,
    DisplayNotesComponent,
    IconsComponent,
    GetAllNotesComponent,
    GetArchiveComponent,
    GetTrashComponent,
    UpdateNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatExpansionModule,
    MatCardModule,
    FlexLayoutModule,
    MatSidenavModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    AuthguardserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
