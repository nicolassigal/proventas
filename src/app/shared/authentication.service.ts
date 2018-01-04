import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthenticationService {
  token;
  constructor(private fb: AngularFireAuth, private router: Router) { }

  _login = (email: string, password: string) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  _register = (email: string, password: string) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  _setToken = (token) => {
    localStorage.setItem('token', token);
    this.token = token;
  }

  _getToken = () => {
    return this.token || localStorage.getItem('token');
  }

  _logOut = () => {
    return firebase.auth().signOut();
  }

  _isAuthenticated = () => {
    return this._getToken() !== null;
  }
}
