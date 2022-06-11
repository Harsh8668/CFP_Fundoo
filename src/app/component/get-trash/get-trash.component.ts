import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-get-trash',
  templateUrl: './get-trash.component.html',
  styleUrls: ['./get-trash.component.scss']
})
export class GetTrashComponent implements OnInit {
  noteTrash: any
  
  constructor(private note: NoteServiceService) { }

  ngOnInit(): void {
    this.getTrashData();
  }

  getTrashData() {
    this.note.getAllTrashData().subscribe((response: any) => {
      // console.log(response);
      this.noteTrash = response.data.data
      this.noteTrash.reverse();
    }
    )
  }
  refresh(data: any) {
    this.getTrashData();
  }
}
