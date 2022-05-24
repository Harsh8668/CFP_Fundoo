import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-forgotemail',
  templateUrl: './forgotemail.component.html',
  styleUrls: ['./forgotemail.component.scss']
})
export class ForgotemailComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserServiceService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      service: "advance"
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.valid) {
      let reqdata = {
        email: this.registerForm.value.email,
        service: this.registerForm.value.service
      }
      this.user.forgotEmail(reqdata).subscribe((response: any) => {
        console.log(response)
      });
    }
  }

}
