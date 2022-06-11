import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})

export class CreateNotesComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  @Output() noteToRefresh  = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private user: NoteServiceService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
     // service: "advance"
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.isValid = true;
    this.noteToRefresh.emit()

    // stop here if form is invalid
    if (this.registerForm.valid) {
      let reqdata = {
        title: this.registerForm.value.title,
        description: this.registerForm.value.description,
       // service: this.registerForm.value.service
      }

      this.user.createNote(reqdata).subscribe((response: any) => {
        console.log(response);
      this._snackBar.open('Note Created', '', { duration: 2000 });
      });
    }
  }

  isValid: boolean = true

  show() {
    this.isValid = false;
  }

}
