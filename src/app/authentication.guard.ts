import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthguardserviceService } from './services/AuthGuardService/authguardservice.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard implements CanActivate {
  //gettoken: any;

  constructor(private Authguardservice: AuthguardserviceService, private router: Router) { }
  // canActivate(): boolean {
  //   if (!this.Authguardservice.gettoken()) {
  //     this.router.navigateByUrl("/login");
  //   }
  //   return this.Authguardservice.gettoken();
  // }

  canActivate():boolean{
    return true;
  }
}
