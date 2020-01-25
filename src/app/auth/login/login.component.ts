import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ],
})
export class LoginComponent {
  @ViewChild('f', { static: false }) loginForm: NgForm;
  user = {
    email: '',
    password: '',
  };

  constructor() { }

  onSubmit() {
    this.user.email = this.loginForm.value.loginData.email;
    this.user.password = this.loginForm.value.loginData.password;

    console.log(this.user);
  }
}
