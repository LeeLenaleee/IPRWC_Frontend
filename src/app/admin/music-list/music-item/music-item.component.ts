import {Component, Input, OnInit} from '@angular/core';
import {MusicService} from '../../music.service';
import {ItemModel} from '../../../models/item.model';

@Component({
  selector: 'app-music-item',
  templateUrl: './music-item.component.html',
  styleUrls: ['./music-item.component.css']
})
export class MusicItemComponent implements OnInit {
  @Input() music: ItemModel;
  @Input() index: number;

  constructor(private musicService: MusicService) { }

  ngOnInit() {
  }
}
