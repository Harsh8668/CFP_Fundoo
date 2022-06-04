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

  changeColor(color:any){
    this.noteCard.color= color;

    let reqdata = {
      color: color,
      noteIdList: [this.noteCard.id],
    }
    this.note.noteColor(reqdata).subscribe((response:any)=>{
      console.log("Color is changed", response);
      
    })
  }
}