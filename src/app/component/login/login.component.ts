import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  openSnackBar() {
    this._snackBar.open;
  }

  constructor(private formBuilder: FormBuilder, private user: UserServiceService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
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
        password: this.registerForm.value.password,
        service: this.registerForm.value.service
      }

      this.user.login(reqdata).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem("token", response.id);
        this.router.navigateByUrl("\dashboard")
        this._snackBar.open('Login Successfully', '', { duration: 2000 });
      });
    }
  }
}