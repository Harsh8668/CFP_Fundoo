import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  token: any

  constructor(private httpService: HttpServiceService) { }

  registration(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        //   'Authorization':'token'
      })
    }

    return this.httpService.postService('/user/userSignUp', reqdata, false, header)
  }

  login(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        //   'Authorization':'token'
      })
    }

    return this.httpService.postService('/user/login', reqdata, false, header)
  }

  forgotEmail(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        //   'Authorization':'token'
      })
    }

    return this.httpService.postService('/user/reset', reqdata, false, header)
  }

}