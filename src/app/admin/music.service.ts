import {EventEmitter, Injectable} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {Observable} from 'rxjs';
import {ItemModel} from '../models/item.model';
import {ApiService} from '../shared/api.service';

@Injectable()
export class MusicService {

  musicEmitter = new EventEmitter<ItemModel[]>();
  musicSelected = new EventEmitter<ItemModel>();

  constructor(private apiService: ApiService) {}

  getMusics() {
    this.apiService.get<ItemModel[]>('/music').subscribe(
      (music: ItemModel[]) => {
        this.musicEmitter.emit(music);
      }
    );
  }

  getMusic(index: number) {
    return this.apiService.getById<ItemModel>('/music', index);
  }

  getMusicByOmschrijving(omschrijving: string) {
    return this.apiService.get<ItemModel[]>('/music/zoek?omschrijving=' + omschrijving);
  }

  formToMusic(form: NgForm) {
    const music = new ItemModel(null, form.value['prijs'], form.value['album'], form.value['producent'],
      form.value['zanger'], form.value['lengte'], form.value['cover']);
    return music;
  }

  postMusic(music: ItemModel) {
    return this.apiService.post<ItemModel>('/music', music);
  }

  putMusic(music: ItemModel, id: number) {
    return this.apiService.put<ItemModel>('/music', id, music);
  }

  deleteMusic(id: number) {
    return this.apiService.delete<ItemModel>('/music', id);
  }
}
