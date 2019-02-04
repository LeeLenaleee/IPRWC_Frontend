import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MusicService} from '../music.service';

@Component({
  selector: 'app-onkosten-toevoegen',
  templateUrl: '../music-shared/music-form.component.html',
  styleUrls: ['../music-shared/music-form.component.css']
})
export class MusicToevoegenComponent implements OnInit {
  buttonTextOne = 'Voeg toe';
  buttonTextTwo = 'Leeg velden';
  @ViewChild('f') form: NgForm;

  constructor(private musicService: MusicService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (confirm('Weet u het zeker?')) {
      const onkost = this.musicService.formToMusic(form);
      this.musicService.postMusic(onkost)
        .subscribe(
          () => {
            alert('Music toegevoegd');
            this.musicService.getMusics();
          }
        );
      form.onReset();
      }
    }

  clearAndDelete() {
    if (confirm('Weet u het zeker?')) {
      this.form.onReset();
    }
  }
}
