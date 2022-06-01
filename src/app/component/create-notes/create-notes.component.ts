import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})

export class CreateNotesComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: NoteServiceService) { }

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

    // stop here if form is invalid
    if (this.registerForm.valid) {
      let reqdata = {
        title: this.registerForm.value.title,
        description: this.registerForm.value.description,
       // service: this.registerForm.value.service
      }

      this.user.createNote(reqdata).subscribe((response: any) => {
        console.log(response);
        
      //  localStorage.setItem("token", response.id)
      });
    }
  }

  isValid: boolean = true

  show() {
    this.isValid = false;
  }
}
