import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private auth: AuthenticationService, private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth._isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['login']);
    }
  }
}
