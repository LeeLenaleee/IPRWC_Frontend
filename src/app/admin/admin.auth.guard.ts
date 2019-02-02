import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {User} from '../models/user';

@Injectable()
export class AdminAuthGuard implements CanActivate {
  user: User;
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));
    if (this.user === null) {
      this.router.navigate(['/user']);
      return true; } else {
      if (this.user.role === 'ADMIN') {
        // logged in so return true
        return true;
      } else {
        this.router.navigate(['/']);
      }
    }
  }
}
