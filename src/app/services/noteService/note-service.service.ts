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
//creation of note in create note page
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

  //display of the data in get all notes pages.

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

  //deleting of the card from the dash board page but not going to trash page

  deleteCard(reqdata: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }

    return this.httpService.postService('/notes/trashNotes', reqdata, true, header)
  }

  //Archive of the card from the dash board page but not going to archive page

  archiveCard(reqdata: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }

    return this.httpService.postService('/notes/archiveNotes', reqdata, true, header)
  }

  //deleting of the card from the dash board page and going to trash page
  getAllTrashData() {
    console.log();

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }

    return this.httpService.getService('/notes/getTrashNotesList', true, header)
  }

  //Archive of the card from the dash board page and going to Archive page
  getAllArchiveData() {
    console.log();

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }

    return this.httpService.getService('/notes/getArchiveNotesList', true, header)
  }

  update(reqdata: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }

    return this.httpService.postService('/notes/updateNotes', reqdata, true, header)
  }

  noteColor(reqdata:any){
    
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }

    return this.httpService.postService('/notes/changesColorNotes', reqdata, true, header)
  }
}
