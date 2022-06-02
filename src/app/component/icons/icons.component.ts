import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteCard: any

  constructor(private note: NoteServiceService) { }

  ngOnInit(): void {
  }

  delete() {
    let req = {
      noteIdList: [this.noteCard.id],
      isDeleted: true,
    }
    this.note.deleteCard(req).subscribe((response: any) => {
      console.log('Note Deleted', response);
    })
  }

  archieve() {
    let req = {
      noteIdList: [this.noteCard.id],
      isArchived: true,
    }
    this.note.archiveCard(req).subscribe((response: any) => {
      console.log('Note Archived', response);
    })
  }
}