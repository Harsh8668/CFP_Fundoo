import { Output, EventEmitter } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataserviceService } from 'src/app/services/dataService/dataservice.service';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  filterString: any;
  @Output() trashNoteToRefresh = new EventEmitter<any>();
  @Output() archiveNoteAndRefresh = new EventEmitter<any>();
  @Output() updateNoteToRefresh = new EventEmitter<any>();
  @Output() commonToRefresh = new EventEmitter<any>();
  message: any;
  searchWord: any;
  subscription: any;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private data: DataserviceService) { }

  @Input() NoteArray: any;

  ngOnInit(): void {
    console.log();
    this.subscription = this.data.currentData.subscribe(message => {
      this.message = message;
      console.log("display card search data======", message.data[0]);
      this.searchWord = message.data[0]
    })
  }

  newMessage() {
    this.data.changeDataMessage("Hello from Sibling")
  }

  openDialog(noteCard: any): void {
    const dialogRef = this.dialog.open(UpdateNotesComponent, {
      width: '450px',
      data: noteCard
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log("Closed");
      this.updateNoteToRefresh.emit("update")
      this.snackBar.open("Note is Update", "", { duration: 2000 });
    });
  }
  trash(data: any) {
    console.log(data);
    this.trashNoteToRefresh.emit("trash")
  }

  archive(data: any) {
    console.log(data);
    this.archiveNoteAndRefresh.emit("archive")
  }

  refreshCommon(data: any) {
    console.log(data);
    this.commonToRefresh.emit("refresh")
  }
}