import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-get-archive',
  templateUrl: './get-archive.component.html',
  styleUrls: ['./get-archive.component.scss']
})
export class GetArchiveComponent implements OnInit {
  noteArchive: any
  constructor(private note: NoteServiceService) { }

  ngOnInit(): void {
    this.getArchiveData();
  }

  getArchiveData() {
    this.note.getAllArchiveData().subscribe((response: any) => {
      console.log(response);
      this.noteArchive = response.data.data
      this.noteArchive.reverse();
    }
    )
  }
}