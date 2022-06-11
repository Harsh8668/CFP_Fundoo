import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})
export class UpdateNotesComponent implements OnInit {
  title: any;
  description: any;
  id: any;

  constructor(
    public dialogRef: MatDialogRef<UpdateNotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private note: NoteServiceService
  ) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
  }

  ngOnInit(): void {
    console.log("from display note", this.data);
  }

  closed() {
    
    let reqdata = {
      title: this.title,
      description: this.description,
      noteId: this.id
    }

    this.note.update(reqdata).subscribe((response: any) => {
      console.log('Updated', response);
    })
  }
}