import {Component, ElementRef, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {MusicService} from '../music.service';
import {ItemModel} from '../../models/item.model';

@Component({
  selector: 'app-onkosten-zoeken',
  templateUrl: './music-zoeken.component.html',
  styleUrls: ['./music-zoeken.component.css']
})
export class MusicZoekenComponent implements OnInit {
  @ViewChild('inputOmschrijving') omschrijving: ElementRef;

  constructor(private musicService: MusicService) { }

  ngOnInit() {
  }

  searchOmschrijving() {
    this.musicService.getMusicByOmschrijving(this.omschrijving.nativeElement.value)
      .subscribe(
        (music: ItemModel[]) => {
          this.musicService.musicEmitter.emit(music);
        });
  }
}
