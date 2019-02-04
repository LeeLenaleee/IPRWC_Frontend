import { Component, OnInit } from '@angular/core';
import {MusicService} from '../music.service';
import {ItemModel} from '../../models/item.model';

@Component({
  selector: 'app-onkosten-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {
  music: ItemModel[];

  constructor(private onkostenService: MusicService) {
  }

  ngOnInit() {
    this.onkostenService.getMusics();
    this.onkostenService.musicEmitter
      .subscribe(
        (music: ItemModel[]) => {
          this.music = music;
        }
      );
  }
}
