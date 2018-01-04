import { AuthenticationService } from './../shared/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../shared/spinner/spinner.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,  private authService: AuthenticationService, private spinner: SpinnerService) { }
  email;
  password;
  password2;
  ngOnInit() {
    if (this.authService._isAuthenticated()) {
      this.router.navigate(['home']);
    }
  }
  navigateToLogin = () => {
    this.router.navigate(['login']);
  }

  register = () => {
    if (this.password === this.password2) {
    this.spinner._show();
      this.authService._register(this.email, this.password).then(() => {
        this.spinner._hide();
        this.router.navigate(['login']);
      });
    }
  }
}
