import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MusicService} from './music.service';
import {MusicZoekenComponent} from './music-zoeken/music-zoeken.component';
import {MusicListComponent} from './music-list/music-list.component';
import {MusicDetailComponent} from './music-detail/music-detail.component';
import {MusicToevoegenComponent} from './music-toevoegen/music-toevoegen.component';
import {MusicItemComponent} from './music-list/music-item/music-item.component';
import {MusicComponent} from './music.component';
import {MusicRoutingModule} from './music-routing.module';
import {FormsModule} from '@angular/forms';
import {MusicResolver} from './music.resolver';
import {AdminAuthGuard} from './admin.auth.guard';
import {ApiService} from '../shared/api.service';

@NgModule({
  declarations: [
    MusicComponent,
    MusicZoekenComponent,
    MusicListComponent,
    MusicDetailComponent,
    MusicToevoegenComponent,
    MusicItemComponent,

  ],
  imports: [
    MusicRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    MusicService,
    MusicResolver,
    AdminAuthGuard,
    ApiService
  ]
})
export class MusicModule { }
