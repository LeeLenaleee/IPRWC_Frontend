import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reloader',
  templateUrl: './reloader.component.html',
  styleUrls: ['./reloader.component.css']
})
export class ReloaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/cart']);
  }

}
