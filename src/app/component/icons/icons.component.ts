import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';
import { GetArchiveComponent } from '../get-archive/get-archive.component';
import { GetTrashComponent } from '../get-trash/get-trash.component';
import { ActivatedRoute } from "@angular/router";
import { MatSnackBar, _SnackBarContainer } from '@angular/material/snack-bar';
import { Output } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteCard: any
  @Output() archiveNoteAndRefresh = new EventEmitter<any>();
  @Output() trashNoteToRefresh = new EventEmitter<any>();
  @Output() commonToRefresh = new EventEmitter<any>(); 

  openSnackBar() {
    this._snackBar.open;
  }

  Archive = true;
  UnArchive = false;
  trashIcons = false;
  icons = true;

  constructor(private note: NoteServiceService, private activeRoute: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    let Component = this.activeRoute.snapshot.component

    if (Component == GetTrashComponent) {
      this.trashIcons = true;
      this.icons = false;
    }
    if (Component == GetArchiveComponent) {
      this.UnArchive = true;
      this.Archive = false;
    }
  }

  // delete the note and store in trash page.
  delete() {
    let reqdata = {
      noteIdList: [this.noteCard.id],
      isDeleted: true,
    }
    this.note.deleteCard(reqdata).subscribe((response: any) => {
      console.log('Note Deleted', response);
      this.trashNoteToRefresh.emit(response);
      this._snackBar.open('Note Deleted', '', { duration: 2000 });
    })
  }

  // archive the note and store in archive page
  archieve() {
    let reqdata = {
      noteIdList: [this.noteCard.id],
      isArchived: true,
    }
    this.note.archiveCard(reqdata).subscribe((response: any) => {
      console.log('Note Archived', response);
      this.archiveNoteAndRefresh.emit(response);
      this._snackBar.open('Note Archived', '', { duration: 2000 });
    })
  }

  // unarchive the note from the archive page and store in notes page.
  unarchieve() {
    let reqdata = {
      noteIdList: [this.noteCard.id],
      isArchived: false,
    }
    this.note.archiveCard(reqdata).subscribe((response: any) => {
      console.log('Note UnArchived', response);
      this.commonToRefresh.emit(response);
      this._snackBar.open('Note Unarchived', '', { duration: 2000 });
    })
  }

  // uses for colors
  colors: Array<any> = [
    { code: '#fff', name: 'white' },
    { code: '#f28b82', name: 'red' },
    { code: '#fbbc04', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ccff90', name: 'green' },
    { code: '#a7ffeb', name: 'teal' },
    { code: '#cbf0f8', name: 'Blue' },
    { code: '#aecbfa', name: 'darkblue' },
    { code: '#d7aefb', name: 'purple' },
    { code: '#fdcfe8', name: 'pink' },
    { code: '#e6c9a8', name: 'brown' },
    { code: '#e8eaed', name: 'grey' },
  ];


  // colors the notes
  changeColor(color: any) {
    this.noteCard.color = color;

    let reqdata = {
      color: color,
      noteIdList: [this.noteCard.id],
    }
    this.note.noteColor(reqdata).subscribe((response: any) => {
      console.log("Color is changed", response);
      this._snackBar.open('Color of note changed', '', { duration: 2000 });
    })
  }

  //restore the note from the trash page and stores on notes page
  onrestore() {
    let reqdata = {
      noteIdList: [this.noteCard.id],
      isDeleted: false,
    }
    this.note.deleteCard(reqdata).subscribe((response: any) => {
      console.log('Note Restored', response);
      this.commonToRefresh.emit(response);
      this._snackBar.open('Note restored', '', { duration: 2000 });
    })
  }

  //delete the note permanently from the trash page

  deleteForever() {
    let reqdata = {
      noteIdList: [this.noteCard.id],
      isDeleted: true,
    }
    this.note.deleteForever(reqdata).subscribe((response: any) => {
      console.log('Note Deleted Permanently', response);
      this.commonToRefresh.emit(response);
      this._snackBar.open('Note Deleted Permanently', '', { duration: 2000 });
    })
  }
}