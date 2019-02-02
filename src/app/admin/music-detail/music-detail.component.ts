import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {MusicService} from '../music.service';
import {ItemModel} from '../../models/item.model';

@Component({
  selector: 'app-onkosten-detail',
  templateUrl: '../music-shared/music-form.component.html',
  styleUrls: ['../music-shared/music-form.component.css']
})
export class MusicDetailComponent implements OnInit {
  music: ItemModel;
  @ViewChild('f') form: NgForm;
  buttonTextOne = 'Wijzig';
  buttonTextTwo = 'Verwijder';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private musicService: MusicService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        () => {
          this.music = this.route.snapshot.data.music;
          this.setValues(this.music);
        }
      );
  }

  setValues(music: ItemModel) {
    setTimeout( () => {
      this.form.form.patchValue({
          album: music.naamAlbum,
          zanger: music.zanger,
          producent: music.producent,
          lengte: music.lengte,
          prijs: music.prijs,
          cover: music.cover
    }
    ); }, 1);
  }

  onSubmit(form: NgForm) {
    if (confirm('Weet u het zeker?')) {
      const music = this.musicService.formToOnkost(form);
      this.musicService.putOnkost(music, this.music.id)
        .subscribe(
          () => {
            alert('Plaat gewijzigd');
            this.musicService.getOnkosten();
          }
        );
    }
  }

  fromServerDateTransForm(date) {
    const parts = date.split('-');
    return parts[2] + '-' + parts[1] + '-' + parts[0];
  }

  clearAndDelete() {
    if (confirm('Weet u het zeker?')) {
      this.musicService.deleteOnkost(+this.route.snapshot.params['id'])
        .subscribe(
          () => {
            this.musicService.getOnkosten();
            alert('Plaat verwijderd');
            this.router.navigate(['/admin']);
          }
        );
    }
  }
}
