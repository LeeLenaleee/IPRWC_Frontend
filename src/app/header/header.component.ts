import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {User} from '../models/user';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  private currentUser: User;
  constructor() { }
  private admin = false;
  private header = false;

  ngOnInit() {
  }

  ngAfterContentChecked(): void {
    /*const user = localStorage.getItem('currentUser');
    this.header = user != null;*/
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser !== null) {
      this.header = true;
      this.admin = this.currentUser.role === 'ADMIN';
    } else { this.header = false; }
  }
}
