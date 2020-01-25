import { Component, ViewChild } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth.service';

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

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.user.email = this.loginForm.value.loginData.email;
    this.user.password = this.loginForm.value.loginData.password;

    this.login();
  }

  login(): void {
    this.authService.login(this.user).pipe(tap(user => {
      console.log(user);
    })).subscribe();
  }
}
