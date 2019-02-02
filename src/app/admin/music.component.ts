import {Component, OnInit, ViewChild} from '@angular/core';
import {MusicService} from './music.service';
import {MusicZoekenComponent} from './music-zoeken/music-zoeken.component';
import {MusicListComponent} from './music-list/music-list.component';
import {ItemModel} from '../models/item.model';

@Component({
  selector: 'app-onkosten',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  selectedMusic: ItemModel;

  @ViewChild(MusicZoekenComponent) onkostenZoekComponent: MusicZoekenComponent;
  @ViewChild(MusicListComponent) onkostenListComponent: MusicListComponent;

  constructor(private onkostenService: MusicService) { }

  ngOnInit() {
    this.onkostenService.onkostenSelected
      .subscribe(
        (music: ItemModel) => {
          this.selectedMusic = music;
        }
      );
  }

}
