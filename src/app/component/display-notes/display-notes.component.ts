import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  @Input() NoteArray: any

  ngOnInit(): void {
    console.log();
  }

  openDialog(noteCard: any): void {
    const dialogRef = this.dialog.open(UpdateNotesComponent, {
      width: '450px',
      data: noteCard
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log("Closed");
    });
  }
}
