import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  token: any;

  constructor(private httpService: HttpServiceService) {
    this.token = localStorage.getItem("token")
  }

  createNote(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }

    return this.httpService.postService('/notes/addNotes', reqdata, true, header)
  }

  getAllData() {
    console.log("Calling the API");

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }

    return this.httpService.getService('/notes/getNotesList', true, header)
  }

  deleteCard(reqdata: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }

    return this.httpService.postService('/notes/trashNotes', reqdata, true, header)
  }

  archiveCard(reqdata: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }

    return this.httpService.postService('/notes/archiveNotes', reqdata, true, header)
  }
}
