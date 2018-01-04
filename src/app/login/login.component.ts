import { AuthenticationService } from './../shared/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { SpinnerService } from '../shared/spinner/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = 'nicolas.sigal@gmail.com';
  password = 'moi10mois';
  error;
  loggingin = false;
  constructor(private router: Router, private authService: AuthenticationService, private spinner: SpinnerService) { }

  ngOnInit() {
    if (this.authService._isAuthenticated()) {
      this.router.navigate(['home']);
    }
  }

  login = () => {
    this.loggingin = true;
    this.spinner._show();
    this.authService._login(this.email, this.password)
      .then(() => {
        this.loggingin = false;
        this.spinner._hide();
        firebase.auth().currentUser.getIdToken().then(token => this.authService._setToken(token));
        this.router.navigate(['home']);
      })
      .catch(error => {
        this.loggingin = false;
        this.handleErrors(error.code);
      });
  }

  navigateToRegister = () => {
    this.router.navigate(['register']);
  }

  handleErrors = (code) => {
    switch (code) {
      case 'auth/argument-error':
        this.error = 'Ingrese un correo electrónico válido';
        break;
      case 'auth/user-not-found':
        this.error = 'Ingrese correo electrónico/contraseña válido';
        break;
      default:
        this.error = 'Ingrese correo electrónico/contraseña válido';
        break;
    }
  }
}
