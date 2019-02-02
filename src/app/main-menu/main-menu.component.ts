import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {ItemService} from '../shop/item.service';
import {ItemModel} from '../models/item.model';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  item: ItemModel;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getRandom().subscribe((random) => {
      this.item = JSON.parse(JSON.stringify(random));
    });
  }

}
