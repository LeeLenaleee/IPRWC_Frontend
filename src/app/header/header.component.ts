import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {User} from '../models/user';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  currentUser: User;
  logout = false;
  constructor(private router: Router) { }
  admin = false;

  ngOnInit() {
  }

  ngAfterContentChecked(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.logout = this.currentUser !== null;

    if (this.currentUser !== null) {
      this.admin = this.currentUser.role === 'ADMIN';
    }
  }

  clickLogout() {
    sessionStorage.clear();
    this.admin = false;
    this.router.navigate(['/']);
  }
}
